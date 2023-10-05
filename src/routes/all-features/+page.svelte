<script>
	import { 
    Container, 
    Row,
    Col,
  } from 'sveltestrap'
  import Results from '../components/Results.svelte'
  import Inputs from '../components/Inputs.svelte'
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

  const clear = () => {
      text.reset()
      texts.reset()
      separator.reset()
      remove_stopwords.reset()
      language.reset()
      count.reset()
  }

  const extended_fields = [
    'remove_stopwords',
    'language',
    'count',
  ]

</script>

<svelte:head>
	<title>All features</title>
	<meta name="description" content="All features" />
</svelte:head>

<Container fluid>
    <Row>
      <Col lg={6}>
        <Inputs {find_similar} {clear} {extended_fields} />
      </Col> 
      <Col lg={6}>
        <Results {result_similars} text={$text}  />
      </Col>
    </Row>
</Container>