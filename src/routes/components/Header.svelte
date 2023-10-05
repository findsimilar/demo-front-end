<script>
	import {
        Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavItem,
        NavLink,
  } from 'sveltestrap';

  let isOpen = false;

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }

  const themes = [
    'journal',
    'cerulean',
    'cosmo',
    //'cyborg', - jumbatron doesn't work
    'darkly',
    'flatly',
    'litera',
    'lumen',
    //'lux', - select doesn't work
    'materia',
    'minty',
    'morph',
    'pulse',
    'quartz',
    'sandstone',
    'scetchy',
    'simplex',
    'slate',
    'solar',
    'spacelab',
    'superhero',
    'united',
    'vapor',
    'yeti',
    'zephyr',
  ]
	let selected_theme = themes[0]

</script>

<svelte:head>
	<link rel="stylesheet" href="./{selected_theme}.min.css" />
</svelte:head>

<header>
  <Navbar dark class="navbar-expand-lg bg-primary border-dark" data-bs-theme="dark">
      <NavbarBrand href="/">Demo</NavbarBrand>
      <NavbarToggler on:click={() => (isOpen = !isOpen)} />
      <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
        <Nav navbar class="me-auto">
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/examples">Examples</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/all-features">All Features</NavLink>
          </NavItem>
        </Nav>
        <form class="d-flex">
        <select class="form-select" bind:value={selected_theme}>
          <option disabled>Choose bootstrap theme</option>
        
          {#each themes as theme}
            <option>{theme}</option>
          {/each}
        </select>
        </form>
      </Collapse>
    </Navbar>

</header>
