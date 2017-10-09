<!--Home page app-->

<template>
    <div class="box_home">
        <div class='home'>
            <h1>{{ message }}</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                message: "Welcome on Home page!"
            }
        }
    }
</script>

<style>
    .box_home {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: auto;
    }

    .home {
        width: 500px;
        height: 200px;
        margin: 150px auto;
        border: 1px solid lightsteelblue;
        color: #afafaf;
        background-color: #fff;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }

    h1 {
        text-align: center;
        line-height: 150px;
    }
</style>