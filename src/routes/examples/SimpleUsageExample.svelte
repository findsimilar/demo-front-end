<script>
     import {
        Button,
    } from 'sveltestrap'

    export let example
    let default_separator = ','

    export let show_example
</script>

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
We prepared the example for you: -> <Button on:click={() => show_example(example)} color="info" type="button">Try example</Button>