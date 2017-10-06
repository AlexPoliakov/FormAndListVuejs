<!--Home page app-->

<template>
    <div class='home'>
        <h2>{{ message }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                message: "Hello on Home page!"
            }
        }
    }
</script>

<style>
    .home {
        width: 300px;
        margin: 0 auto;
        background-color: aquamarine;
    }

    h2 {
        margin-top: 150px;
        text-align: center;
    }
</style>