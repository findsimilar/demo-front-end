<script>
    import {
        text, 
        texts, 
        separator,
    } from './stores.js'
    import { fetch_data } from './core.js'
    
    import {
        Button
    } from 'sveltestrap'

    async function fetch_example(name) {
        const url = `/examples/${name}/`
        return fetch_data(url, 'GET')
    }

    let example = {}

    const get_example = () => {
        example = fetch_example('films-demo')
    }

    const set_example_value = (example) => {
        text.set(example.text)
        separator.reset()
        texts.set(example.texts.join($separator))    
    }

    get_example()

    const default_separator = $separator

</script>

<div class="mt-1">
    {#await example}
    <p>...waiting</p>
    {:then example}
    This is the most simple example. <br>You can compare one text to anothers and find similars.
    <p></p>
    Input text to compare to the <b>Main text</b> input.<br>
    Any text will be good. For example: <b>
        {example.text}
    </b>.<p></p>
    Input other texts to compare and find similars to the <b>List of texts</b> input.<br>
    For example: <b>

        {example.texts.join(default_separator).slice(0, 159)}...
    
    </b><p></p>
    By default (<b>,</b>) uses as separator. But you can change it.<br>
    Input any text to <b>Separator</b> input if you want.<p></p>
    When everything is ready, press the <b>Find similar</b> button and enjoy the results.<p></p>
    We prepared the example for you: -> <Button on:click={() => set_example_value(example)} color="info" type="button">Try example</Button>
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</div>