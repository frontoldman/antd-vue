/**
* Created by zhangran on 16/5/17.
*/

<style type="text/style">

</style>

<template>
    <div class="col-{{span}}"><slot></slot></div>
</template>

<script>

    export default {
        props: {
            span: {
                type: Number,
                default: 12
            }
        },
        data() {
            return {
                //data here
            }
        },
        ready() {
            console.log(22)
        },
        methods: {

        }
    }

</script>