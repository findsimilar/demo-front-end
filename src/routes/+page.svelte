<script>
	import logo from '$lib/images/logo.png';
</script>

<svelte:head>
	<title>demo.findsimilar.org</title>
	<meta name="description" content="FindSimilar demo app" />
</svelte:head>

<div class="text-center  rounded-3">
    <img src="{logo}" class="bi mt-4 mb-3" width="100" height="100" alt="FindSimilar Logo">
    <h1 class="text-body-emphasis">Welcome to FindSimilar Demo Project!</h1>
    <p class="col-lg-8 mx-auto fs-5 text-muted">
      To explore <b>FindSimilar</b> features step by step you can check
    </p>
    <div class="d-inline-flex gap-2 mb-5">
        <a class="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" href="/examples">Examples</a>
    </div>
    <p class="col-lg-8 mx-auto fs-5 text-muted">
      Or you can use form with all possible options without examples
    </p>
    <div class="d-inline-flex gap-2 mb-5">
        <a class="d-inline-flex align-items-center btn btn-secondary btn-lg px-4 rounded-pill" href="/all-features">All features</a>
    </div>
    <p class="col-lg-8 mx-auto fs-5 text-muted">
      If you like Swagger or Redoc more then web application. You can check 
    </p>
    <div class="d-inline-flex gap-2 mb-5">
        <a class="d-inline-flex align-items-center btn btn-info btn-lg px-4 rounded-pill" href="http://api.findsimilar.org" target="_blank">Demo API</a>
    </div>
</div>

