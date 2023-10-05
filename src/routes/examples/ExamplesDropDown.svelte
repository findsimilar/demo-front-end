<script>
    import {
        Dropdown,
        DropdownItem,
        DropdownMenu,
        DropdownToggle
    } from 'sveltestrap'
    
    export let example_list
    export let select_example
    export let current_example
</script>

<Dropdown direction="right" group size="lg">
    <DropdownToggle color='secondary' caret>{current_example.name}</DropdownToggle>
    <DropdownMenu class="dropdown-menu-dark">
      {#each example_list as example_item}
          <DropdownItem active={current_example.name===example_item.name}
              on:click={() => select_example(example_item)}>
              {example_item.name}
          </DropdownItem>          
      {/each}
    </DropdownMenu>
  </Dropdown>