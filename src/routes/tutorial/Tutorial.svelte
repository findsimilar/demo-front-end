<script>
    import {
        text, 
        texts, 
        separator,
    } from './stores.js'
    import { fetch_data } from './core.js'
    
    import {
        Button,
        Dropdown,
        DropdownItem,
        DropdownMenu,
        DropdownToggle
    } from 'sveltestrap'

    async function fetch_example(name) {

        const mocked_result = {
            text: 'This is mocked text',
            texts: [
                'This is mocked text too',
                'This is other text',
                'And other text',
                'Again other text',
                'Some different mocked text',
                'Just text',
                'End text'
            ]
        }

        const url = `/examples/${name}/`
        return fetch_data(url, 'GET', 'undefined', mocked_result)
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

    let current_example = {
        name: '1. Simple Usage',
        query_name: 'films-demo'
    }

    const example_list = [
        {
            name: '1. Simple Usage',
            query_name: 'films-demo',
        },
        {
            name: '2. Using Stop Words',
            query_name: 'films-desctiprion',
        }
    ]

</script>

<div class="mt-1">
    <div class="mb-3">
        <Dropdown direction="right" group size="lg">
          <DropdownToggle color='secondary' caret>{current_example.name}</DropdownToggle>
          <DropdownMenu class="dropdown-menu-dark">
            {#each example_list as example_item}
                <DropdownItem active={current_example.name===example_item.name}
                    on:click={() => current_example=example_item}>
                    {example_item.name}
                </DropdownItem>          
            {/each}
          </DropdownMenu>
        </Dropdown>
      </div>

    {#if current_example.query_name === 'films-demo'}
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
    {:else}
        <p>Example: <b>{current_example.name}</b><br> will be available soon.</p>
        <p>You can try use API directly on <a href="http://api.findsimilar.org/" target="_blank">api.findsimilar.org</a>
             for a while.</p>
    {/if}

</div>