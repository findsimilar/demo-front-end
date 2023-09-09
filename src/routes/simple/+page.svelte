<script>
  import { dev } from '$app/environment';
	import { 
    Container, 
    Form, 
    FormGroup, 
    Label, 
    Button, 
    Input,
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    ListGroup,
    ListGroupItem,
    Row,
    Col
  } from 'sveltestrap';
	const default_separator = ','
	//const films = 'Титаник,Матрица,Форрест Гамп,Терминатор 2,Гаттака,С широко закрытыми глазами,Основной инстинкт,Молчание ягнят,Зеленая миля,Достучаться до небес,Пятый элемент,Побег из Шоушенка,Телохранитель,Люди в черном,Бойцовский клуб,Один дома,Бетховен,Криминальное чтиво,Умница Уилл Хантинг,Маска,Знакомьтесь, Джо Блэк,День сурка,Большой Лебовски,Леон,Американский пирог,Шоу Трумана,Красотка,Адвокат дьявола'
  const film_list = [
      'The Shawshank Redemption (1994)',
      'The Godfather (1972)',
      'The Godfather: Part II (1974)',
      'Il buono, il brutto, il cattivo. (1966)',
      'Pulp Fiction (1994)',
      'Inception (2010)',
      "Schindler's List (1993)",
      'Angry Men (1957)',
      "One Flew Over the Cuckoo's Nest (1975)",
      'The Dark Knight (2008)',
      'Star Wars: Episode V - The Empire Strikes Back (1980)',
      'The Lord of the Rings: The Return of the King (2003)',
      'Shichinin no samurai (1954)',
      'Star Wars (1977)',
      'Goodfellas (1990)',
      'Casablanca (1942)',
      'Fight Club (1999)',
      'Cidade de Deus (2002)',
      'The Lord of the Rings: The Fellowship of the Ring (2001)',
      'Rear Window (1954)',
      "C'era una volta il West (1968)",
      'Raiders of the Lost Ark (1981)',
      'Toy Story 3 (2010)',
      'Psycho (1960)',
      'The Usual Suspects (1995)',
      'The Matrix (1999)',
      'The Silence of the Lambs (1991)',
      'Se7en (1995)',
      'Memento (2000)',
      "It's a Wonderful Life (1946)",
      'The Lord of the Rings: The Two Towers (2002)',
      'Sunset Blvd. (1950)',
      'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb (1964)',
      'Forrest Gump (1994)',
      'Leon (1994)',
      'Citizen Kane (1941)',
      'Apocalypse Now (1979)',
      'North by Northwest (1959)',
      'American Beauty (1999)',
      'American History X (1998)',
      'Taxi Driver (1976)',
      'Terminator 2: Judgment Day (1991)',
      'Saving Private Ryan (1998)',
      'Vertigo (1958)',
      "Le fabuleux destin d'Amélie Poulain (2001)",
      'Alien (1979)',
      'WALL·E (2008)',
  ]
  const film = 'Ring 2002'
  const films = film_list.join()
  const films_placeholder = `For example: ${films}`
  const film_placeholder = `For example: ${film}`

  let text_value = ""
  let texts_value = ""
  let separator = default_separator

  const set_example_value = () => {
    text_value = film
    texts_value = films  
  }

  const clear = () => {
    text_value = ""
    texts_value = ""
    result_similars = []
  }

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
    const text_list = texts_value.split(separator)
    result_similars = get_similars(text_value, text_list)
  }
</script>

<svelte:head>
	<title>Simple usage</title>
	<meta name="description" content="Simple usage example" />
</svelte:head>

<Container fluid>
  <Row>
    <Col lg={4}>
      <div class="mt-1">
        This is the most simple example. <br>You can compare one text to anothers and find similars.
        <p></p>
        Input text to compare to the <b>Main text</b> input.<br>
        Any text will be good. For example: <b>{film}</b>.<p></p>
        Input other texts to compare and find similars to the <b>List of texts</b> input.<br>
        For example: <b>{films.slice(0, 159)}...</b><p></p>
        By default (<b>,</b>) uses as separator. But you can change it.<br>
        Input any text to <b>Separator</b> input if you want.<p></p>
        When everything is ready, press the <b>Find similar</b> button and enjoy the results.<p></p>
        We prepared the example for you: -> <Button on:click={set_example_value} color="info" type="button">Try example</Button>
      </div>
    </Col>
    <Col lg={4}>
      <Form method="post" class="mt-1">
        <FormGroup>
          <Label for="text">Main text:</Label>
          <Input id="text" name="text" bind:value={text_value} />
        </FormGroup>
        <FormGroup>
          <Label for="texts">List of texts separated by (default ,):</Label>
          <Input type="textarea" cols="35" rows="10" bind:value={texts_value} name="texts" id="texts" />
        </FormGroup>
        <FormGroup>
          <Label for="separator">Separator (default {default_separator})</Label>
          <Input id="separator" name="separator" placeholder="Separator. Default {default_separator}"  bind:value="{separator}"/>
        </FormGroup>
        <Button type="button" color="primary" on:click={find_similar}>Find similar</Button>
        <Button type="button" on:click={clear} color="danger">Clear form</Button>
      </Form>
    </Col>
    <Col lg={4}>
      {#await result_similars}
        <p>...waiting</p>
      {:then result_similars_list}
        <Card class="mt-3">
          <CardHeader>
            <CardTitle>{text_value}</CardTitle>
          </CardHeader>
          <CardBody>
            <ListGroup>
              {#each result_similars_list as result_similar, index}
                <ListGroupItem>{index}) {result_similar.text} - ({result_similar.cos})</ListGroupItem>
              {/each}
            </ListGroup>
          </CardBody>
        </Card>
      {:catch error}
        <p style="color: red">{error.message}</p>
      {/await}
    </Col>
  </Row>
</Container>