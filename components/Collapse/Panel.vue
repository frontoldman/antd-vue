/**
* Created by zhangran on 16/5/31.
*/

<style type="text/style">

</style>

<template>
    <div class="ant-collapse-item" key="{{key}}">
        <div class="ant-collapse-header" role="tab" aria-expanded="true">
            <i class="arrow"></i>{{header}}
        </div>
        <div class="ant-collapse-content" role="tabpanel">
            <div class="ant-collapse-content-box">
                <p>
                    <slot></slot>
                </p>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            header: String,
            key: String,
            defaultActiveKey: Array
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