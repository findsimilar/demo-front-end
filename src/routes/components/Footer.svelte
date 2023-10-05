<script>
	import logo from '$lib/images/logo.png';
	import { Container } from 'sveltestrap';
</script>

<footer class="footer mt-auto py-3 border-top">
<Container>
    <div class="d-flex flex-wrap justify-content-between align-items-center py-3 px-3">
    <div class="col-md-4 d-flex align-items-center">
        <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <img src="{logo}" class="bi" width="30" height="24" alt="FindSimilar logo">
        </a>
        <span class="mb-3 mb-md-0 text-muted">Copyleft &#127279; FindSimilar 2023</span>
    </div>

    <ul class="nav col-md-4 justify-content-end">
        <li class="nav-item"><a class="nav-link px-2 text-muted" target="_blank" href="https://github.com/findsimilar/find-similar"><i class="bi bi-github"></i></a></li>
    </ul>
    </div>
</Container>
</footer>