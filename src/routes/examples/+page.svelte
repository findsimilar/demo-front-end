<script>
    import Example from './Example.svelte'
    import Tutorial from './Tutorial.svelte'
    import Results from '../components/Results.svelte'
    import ExamplesDropDown from './ExamplesDropDown.svelte'
    import Inputs from '../components/Inputs.svelte'
    import RemoveStopWordsExample from './RemoveStopWordsExample.svelte'
    import SimpleUsageExample from './SimpleUsageExample.svelte'
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
        },
        {
            name: '2. Using Stop Words',
            query_name: 'films-description',
            extended_fields: ['remove_stopwords'],
            component: RemoveStopWordsExample,
        }
    ]

    let current_example = example_list[0]

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

    const get_example = (name) => {
    example = fetch_example(name)
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
        text.set(example.text)
        texts.set(example.texts.join($separator))
    }

</script>

<svelte:head>
	<title>Examples</title>
	<meta name="description" content="Examples" />
</svelte:head>

<Example>
  <Tutorial {current_example} {example} {show_example} slot="tutorial">
    <ExamplesDropDown slot="example-dropdown"
    {current_example}
    {select_example}
    {example_list}
    />
  </Tutorial>
  <Inputs slot="inputs" {result_similars} {find_similar} {clear} extended_fields={current_example.extended_fields} />
  <Results slot="results" {result_similars} text={$text} />
</Example>
