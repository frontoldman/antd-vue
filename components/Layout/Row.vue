/**
* Created by zhangran on 16/5/17.
*/

<style type="text/style">

</style>

<template>
    <div :class="classes"><slot></slot></div>
</template>

<script>

    export default {
        props: {
            type: String,
            align: String,      //垂直对齐方式 top middle bottom
            justify: String,    //start center end space-between space-around
            className: String
        },
        computed: {
            classes() {
                return {
                    [`row`]: 1,
                    [`row-${this.type}`]: this.type,
                    [`row-${this.type}-${this.align}`]: this.align,
                    [`row-${this.type}-${this.justify}`]: this.justify,
                    [`${this.className}`]: this.className
                }
            }
        }
    }

</script>