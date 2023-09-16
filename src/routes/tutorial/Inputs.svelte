<script>
    import {
        text, 
        texts, 
        separator,
    } from './stores.js'
    import {
        Form,
        FormGroup,
        Input,
        Label,
        Button
    } from 'sveltestrap'
    export let find_similar
    let default_separator = ','

    const clear = () => {
        text.reset()
        texts.reset()
        separator.reset()
    }
    
</script>

<Form method="post" class="mt-1">
<FormGroup>
    <Label for="text">Main text:</Label>
    <Input id="text" name="text" bind:value={$text} />
</FormGroup>
<FormGroup>
    <Label for="texts">List of texts separated by (default {default_separator}):</Label>
    <Input type="textarea" cols="35" rows="10" bind:value={$texts} name="texts" id="texts" />
</FormGroup>
<FormGroup>
    <Label for="separator">Separator (default {default_separator})</Label>
    <Input id="separator" name="separator" bind:value={$separator}/>
</FormGroup>
<Button type="button" color="primary" on:click={find_similar}>Find similar</Button>
<Button type="button" on:click={clear} color="danger">Clear form</Button>
</Form>