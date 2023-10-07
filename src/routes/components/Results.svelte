<script>
    import {
        Card,
        CardHeader,
        CardTitle,
        CardBody,
        ListGroup,
        ListGroupItem,
    } from 'sveltestrap'
    import ResultItem from './ResultItem.svelte';
    export let result_similars = []
    export let text
</script>

<div class="mt-1">
{#await result_similars}
<p>...waiting</p>
{:then result_similars}
Result:
{#if 'errors' in result_similars }
<div class="mt-1">
  {#each Object.entries(result_similars.errors) as [field, validate_errors] }
    <Card>
      <CardHeader>
        <CardTitle>{field}</CardTitle>
      </CardHeader>
      <CardBody>
        <ListGroup>
          {#each validate_errors as validate_error}
            <ListGroupItem color="danger">{validate_error}</ListGroupItem>
          {/each}
        </ListGroup>
      </CardBody>
    </Card>
  {/each}
</div>
{:else}
  <Card class="mt-1">
    <CardHeader>
      <CardTitle>{text}</CardTitle>
    </CardHeader>
    <CardBody>
      <ListGroup>
        {#each result_similars as result_similar, index}
          <ResultItem index={index+1} text={result_similar.text} cos={result_similar.cos}/>
        {/each}
      </ListGroup>
    </CardBody>
  </Card>
{/if}
{:catch error}
<p style="color: red">{error.message}</p>
{/await}
</div>