<script>
     import {
        Button,
        ListGroup,
        ListGroupItem
    } from 'sveltestrap'
    import {
	  count,
      language,
    } from '../stores.js'
    export let example
    export let show_example

    const show_with_language = (name, lang) => {
        show_example(example[name])
        count.set(18)
        language.set(lang)
    }
    
    const show_english = () => {
        show_with_language('films-demo', 'english')
    }

    const show_russian = () => {
        show_with_language('films-demo-ru', 'russian')
    }

    const show_ukrainian = () => {
        show_with_language('films-demo-ua', 'ukrainian')
    }

    const show_turkish = () => {
        show_with_language('films-demo-tr', 'turkish')
    }

</script>

<b>FindSimilar</b> works with <i>English</i> language by default.<p></p>
But you can change language anytime if you want.<p></p>
In this example you cant use <b>Language</b> input to set the language.<p></p>
Again we prepaire fore you some examples to try:
<ListGroup>
    <ListGroupItem><Button on:click={show_english} color="primary" type="button">English</Button></ListGroupItem>
    <ListGroupItem><Button on:click={show_turkish} color="info" type="button">Turkish</Button></ListGroupItem>
    <ListGroupItem><Button on:click={show_russian} color="info" type="button">Russian</Button></ListGroupItem>
</ListGroup>
<p></p>
Some languages don't support yet :( <br>
For example <Button on:click={show_ukrainian} color="warning" type="button">Ukrainian</Button>
