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

</script>

<header>
  <Navbar dark class="navbar-expand-lg bg-primary border-bottom border-dark rounded-3" data-bs-theme="dark">
      <NavbarBrand href="/">Demo</NavbarBrand>
      <NavbarToggler on:click={() => (isOpen = !isOpen)} />
      <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
        <Nav navbar class="me-auto">
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/tutorial">Tutorial</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>

</header>
