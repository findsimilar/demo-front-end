<script>
    export let current_example
    export let example
    export let show_example
</script>


<div class="mb-3">
<slot name="example-dropdown" />
</div>

{#await example}
<p>...waiting</p>
{:then example}
<svelte:component this={current_example.component} {example} {show_example} />

{:catch error}
    <p style="color: red">{error.message}</p>
{/await}
