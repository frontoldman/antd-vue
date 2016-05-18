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
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            },
            push: {
                type: [Number, String]
            },
            pull: {
                type: [Number, String]
            },
            order: {
                type: [Number, String]
            }
        },
        computed: {
            classes() {
                return {
                    [`col-${this.span}`]: this.span,
                    [`col-offset-${this.offset}`]: this.offset,
                    [`col-push-${this.push}`]: this.push,
                    [`col-pull-${this.pull}`]: this.pull,
                    [`col-order-${this.order}`]: this.order
                };
            }
        }
    }

</script>