<script>
    import {
        Card,
        CardHeader,
        CardTitle,
        CardBody,
        ListGroup,
        ListGroupItem,
    } from 'sveltestrap'
    export let result_similars
    export let text
</script>


{#await result_similars}
<p>...waiting</p>
{:then result_similars_list}
<Card class="mt-3">
  <CardHeader>
    <CardTitle>{text}</CardTitle>
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