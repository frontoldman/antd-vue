/**
* Created by zhangran on 16/5/17.
*/

<style type="text/style">

</style>

<template>
    <i class="anticon anticon-{{type}}"></i>
</template>

<script>

    export default {
        props: {
            type: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                //data here
            }
        },
        ready() {

        },
        methods: {}
    }

</script>