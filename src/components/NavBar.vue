<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light p-2">
    <a class="navbar-brand" href="/"><img src="https://whiteams.winsurtech.com/assets/logo3-8d18ff79.png" alt="logo"></a><h3 class="heading">Dashboard</h3>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/signin">Sign In</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
nav{
  background-color: transparent !important;
}
img{
  width:11rem;
}
.heading{
  color: white;
  font-weight: bold;
  padding: 0px 10px;
  margin-top: 17px;
}
</style>
