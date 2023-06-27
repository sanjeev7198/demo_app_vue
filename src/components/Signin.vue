<template>
    <div class="container pt-3 d-flex justify-content-center align-items-center text-center">
        <div class="card w-50">
            <form action="/">
                <div class="form-group">
                    <input type="email" class="form-control mb-3" placeholder="Enter Username" />
                </div>
                <div class="form-group">
                    <input type="Password" class="form-control mb-3" placeholder="Enter Password" />
                </div>
                <div class="form-group">
                    <input class="form-control btn btn-primary mb-3" type="submit" href="/" value="Log In"/>
                </div>
            </form>
        </div>
    </div>
</template>
  
<script>
  export default {
    name: 'SignIn',
  }
</script>

<style scoped>
.card{
    background: transparent;
    border: none;
}
input{
    border: none !important;
}
.container{
    min-height: calc(100vh - 72px);
}
</style>
  