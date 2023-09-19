<script>
  import {
    text, 
    texts, 
    separator,

  } from './stores.js'
  import {
    fetch_data
  } from './core.js'
	import { 
    Container, 
    Row,
    Col
  } from 'sveltestrap';
  import Tutorial from './Tutorial.svelte'
  import Inputs from './Inputs.svelte'
  import Results from './Results.svelte'

  let result_similars = []

  async function get_similars(text, texts) {
    const url = '/'
    const data = {
            'text_to_check': text,
            'texts': texts,
            'language': 'english',
            'count': 10,
        }

    const mocked_result = [
      {
        text: 'one',
        cos: 1.0,
      },
      {
        text: 'two',
        cos: 0.6,
      },
      {
        text: 'three',
        cos: 0.2,
      },
      {
        text: 'thour',
        cos: 0.0
      },
    ]
    return fetch_data(url, 'POST', data, mocked_result)
  }

  const find_similar = () => {
    const text_list = $texts.split($separator)
    result_similars = get_similars($text, text_list)
  }
</script>

<svelte:head>
	<title>Tutorial</title>
	<meta name="description" content="Tutorial" />
</svelte:head>

<Container fluid>
  <Row>
    <Col lg={4}>
      <Tutorial />
    </Col> 
    <Col lg={4}>
      <Inputs 
        find_similar={find_similar}
        />
    </Col>
    <Col lg={4}>
      <Results result_similars={result_similars} text={$text} />
    </Col>
  </Row>
</Container>
