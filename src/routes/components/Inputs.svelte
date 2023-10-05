<script>
    import {
        Form,
        FormGroup,
        Input,
        Label,
        Button
    } from 'sveltestrap'
    import {
        text, 
        texts, 
        separator,
        remove_stopwords,
        language,
        count,
        default_separator
    } from '../stores.js'

    export let clear
    export let find_similar
    export let extended_fields = []

</script>

<Form method="post" class="mt-1">
<FormGroup>
    <Label for="text">Main text</Label>
    <Input id="text" name="text" bind:value={$text} />
</FormGroup>
<FormGroup>
    <Label for="texts">List of texts separated by (default {default_separator})</Label>
    <Input type="textarea" cols="35" rows="10" bind:value={$texts} name="texts" id="texts" />
</FormGroup>
<FormGroup>
    <Label for="separator">Separator (default {default_separator})</Label>
    <Input id="separator" name="separator" bind:value={$separator}/>
</FormGroup>
{#if extended_fields.includes('remove_stopwords')}
<FormGroup>
    <Label for="remove_stopwords">Remove stop words</Label>
    <Input id="remove_stopwords" name="remove_stopwords" type="checkbox" bind:checked={$remove_stopwords} />
</FormGroup>
{/if}
{#if extended_fields.includes('language')}
<FormGroup>
    <Label for="language">Language</Label>
    <Input id="language" name="language" bind:value={$language} />
</FormGroup>
{/if}
{#if extended_fields.includes('count')}
<FormGroup>
    <Label for="count">Count</Label>
    <Input id="count" type="number" name="count" bind:value={$count} />
</FormGroup>
{/if}
<Button type="button" color="primary" on:click={find_similar}>Find similar</Button>
<Button type="button" on:click={clear} color="danger">Clear form</Button>
</Form>