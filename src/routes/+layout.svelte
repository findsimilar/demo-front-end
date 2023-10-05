<script>
	import Header from './components/Header.svelte'
	import { Container } from 'sveltestrap';
  //import Footer from './Footer.svelte';
</script>

  <div class="app d-flex flex-column h-100">
    <Header />

    <main class="d-flex flex-column h-100">
      <Container fluid>
        <slot />
      </Container>
    </main>

    <!-- <Footer /> -->
  </div>