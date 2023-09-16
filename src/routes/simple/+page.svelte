<script>
  import {
    text, 
    texts, 
    separator,

  } from './stores.js'
  import { dev } from '$app/environment';
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
    const url = dev ? 'http://127.0.0.1:8000/api/' : 'http://188.64.12.238:8000/api/'
    const data = {
            'text_to_check': text,
            'texts': texts,
            'language': 'russian',
            'count': texts.length,
        }
    const res = await fetch(url,
      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(data)
      })

      console.log('res', res)
      if (res.ok) {
        return await res.json();
      } else {
          // Sometimes the API will fail!
          throw new Error('Request failed');
      }
  }

  const find_similar = () => {
    const text_list = $texts.split($separator)
    result_similars = get_similars($text, text_list)
  }
</script>

<svelte:head>
	<title>Simple usage</title>
	<meta name="description" content="Simple usage example" />
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