<script>
    import {
        Card,
        CardHeader,
        CardTitle,
        CardBody,
        ListGroup,
    } from 'sveltestrap'
    import ResultItem from './ResultItem.svelte';
    export let result_similars
    export let text
</script>

<div class="mt-1">
{#await result_similars}
<p>...waiting</p>
{:then result_similars_list}
Result:
<Card class="mt-1">
  <CardHeader>
    <CardTitle>{text}</CardTitle>
  </CardHeader>
  <CardBody>
    <ListGroup>
      {#each result_similars_list as result_similar, index}
        <ResultItem index={index+1} text={result_similar.text} cos={result_similar.cos}/>
      {/each}
    </ListGroup>
  </CardBody>
</Card>
{:catch error}
<p style="color: red">{error.message}</p>
{/await}
</div>