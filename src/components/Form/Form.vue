<template>
    <div class='form'>
        <h2>{{ message }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'form',
        data() {
            return {
                message: "Hello on Form page!"
            }
        }
    }
</script>

<style>
    .form {
        width: 300px;
        margin: 0 auto;
        background-color: orangered;
    }

    h2 {
        margin-top: 150px;
        text-align: center;
    }
</style>