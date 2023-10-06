<script>
    import {
       Button,
   } from 'sveltestrap'
   import {
    count,
   } from '../stores.js'
   export let example
   export let show_example

   const LESS_RESULTS_NUMBER = 5
   const MORE_RESULTS_NUMBER = 20
   
   const less_results = () => {
       show_example(example)
       count.set(LESS_RESULTS_NUMBER)
   }

   const more_results = () => {
       show_example(example)
       count.set(MORE_RESULTS_NUMBER)
   }
</script>

You can note that we have different "good" results in the different examples.<p></p>
You can control results count.<br>
In this example you can use <b>Count</b> input for this purpose.<p></p>
Let's try <Button on:click={less_results} color="info" type="button">This example</Button> 
with films description again.<p></p>
We set <b>{LESS_RESULTS_NUMBER}</b> in the count parameter. But it's to little.<p></p>
Use <Button on:click={more_results} color="info" type="button">This button</Button>
to set <b>{MORE_RESULTS_NUMBER}</b> and compare the results.