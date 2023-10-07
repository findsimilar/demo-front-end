<script>
    import { 
      Container, 
      Row,
      Col,
      Button
    } from 'sveltestrap';

    import Example from './Example.svelte'
    import Tutorial from './Tutorial.svelte'
    import Results from '../components/Results.svelte'
    import ExamplesDropDown from './ExamplesDropDown.svelte'
    import Inputs from '../components/Inputs.svelte'
    import RemoveStopWordsExample from './RemoveStopWordsExample.svelte'
    import SimpleUsageExample from './SimpleUsageExample.svelte'
    import ManyLanguagesExample from './ManyLanguagesExample.svelte'
    import CountExample from './CountExample.svelte'

    import {
      fetch_data
    } from '../core.js'
    import { get_similars } from '../core'
    import {
      text, 
      texts, 
      separator,
      remove_stopwords,
      language,
      count,
    } from '../stores.js'

    let result_similars = []

    async function find_similar() {
        const text_list = $texts.split($separator)
        result_similars = get_similars(
            $text, 
            text_list,
            $remove_stopwords,
            $language,
            $count
            )
    }

    const example_list = [
        {
            name: '1. Simple Usage',
            query_name: 'films-demo',
            extended_fields: [],
            component: SimpleUsageExample,
            order: 1
        },
        {
            name: '2. Using Stop Words',
            query_name: 'films-description',
            extended_fields: ['remove_stopwords'],
            component: RemoveStopWordsExample,
            order: 2
        },
        {
            name: '3. Different languages',
            query_name: ['films-demo', 'films-demo-ru', 'films-demo-ua', 'films-demo-tr'],
            extended_fields: ['remove_stopwords', 'language'],
            component: ManyLanguagesExample,
            order: 3
        },
        {
            name: '4. Results count',
            query_name: 'films-description',
            extended_fields: ['remove_stopwords', 'language', 'count'],
            component: CountExample,
            order: 4
        }
    ]

    const get_next_example = (current_example) => {
      const next_example_index = current_example.order + 1
      if (next_example_index > example_list.length) {
        return null
      }
      return example_list[next_example_index - 1]  // order starts with 1
    }
        
    let current_example = example_list[0]
    $: next_example = get_next_example(current_example)

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

    const get_example = (query_name) => {
      if (typeof query_name === "string") {
        example = fetch_example(query_name)
      }
      else {
        let many_examples = {}
        for (const name of query_name) {
          fetch_example(name).then((one_example) => {
            many_examples[name] = one_example
          })
        }
        example = many_examples
      }
    }

    get_example(current_example.query_name)

    const clear = () => {
        text.reset()
        texts.reset()
        separator.reset()
        remove_stopwords.reset()
        language.reset()
        count.reset()
    }

    const select_example = (new_example) => {
      current_example = new_example
      get_example(new_example.query_name)
      clear()
    }

    const show_example = (example) => {
        clear()
        console.log(example)
        console.log(example.text)
        text.set(example.text)
        texts.set(example.texts.join($separator))
    }

</script>

<svelte:head>
	<title>Examples</title>
	<meta name="description" content="Examples" />
</svelte:head>

<Example>
  <div class="mt-1" slot="tutorial">
  <Tutorial {current_example} {example} {show_example}>
    <ExamplesDropDown slot="example-dropdown"
    {current_example}
    {select_example}
    {example_list}
    />
  </Tutorial>
  <p></p>
  {#if next_example === null}
    <Button color="link" href="/all-features">The end: Be free to try All Features by yourself</Button>
  {:else}
    <Button on:click={() => select_example(next_example)} color="link">Next: {next_example.name}</Button>
  {/if}
</div>
  <Inputs slot="inputs" {find_similar} {clear} extended_fields={current_example.extended_fields} />
  <Results slot="results" {result_similars} text={$text} />
</Example>
