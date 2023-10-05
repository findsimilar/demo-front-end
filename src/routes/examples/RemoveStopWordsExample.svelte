<script>
     import {
        Button,
    } from 'sveltestrap'
    import {
	count,
      remove_stopwords,
    } from '../stores.js'
    export let example
    export let show_example
    
    const remove_stop_words = () => {
        show_example(example)
        remove_stopwords.set(true)
        count.set(18)
    }

    const not_remove_stop_words = () => {
        show_example(example)
        remove_stopwords.set(false)
        count.set(18)
    }
</script>

In this example we can control "stop words" parameter.<p></p>
You can use <b>Remove stop words</b> input.<p></p>
By default "find-similar" remove stop words from texts.<br>
In this way words like <b>the, and, or, ...</b> will be removed<p></p>
You can uncheck "remove stop words".<br>
In this way words like <b>the, and, or, ...</b> will <b>not</b> be removed<p></p>
You can control this option for different texts to get better results.<p></p>
We prepared more examples for you:<br>
You can try it -> <Button on:click={remove_stop_words} color="info" type="button">Remove stop words</Button> 
and -> <Button on:click={not_remove_stop_words} color="info" type="button">Not remove</Button><br>
for better understanding.