<template>
    <div class='users'>
        <h2>{{ message }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'users',
        data() {
            return {
                message: "Hello on Users page!"
            }
        }
    }
</script>

<style>
    .users {
        width: 300px;
        margin: 0 auto;
        background-color: greenyellow;
    }

    h2 {
        margin-top: 150px;
        text-align: center;
    }
</style>