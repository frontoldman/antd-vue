/**
* Created by zhangran on 16/5/18.
*/

<style type="text/style">

</style>

<template>
    <span class="ant-badge" title="{{count}}">
        <slot></slot><sup data-show="true" class="ant-scroll-number ant-badge-count" height="18">
        <span :style="{transform: 'translate3d(0px, ' + (-18*(count*1+9)) + 'px, 0px'}" class="ant-scroll-number-only"
            style="transition: none;  height: 18px;">
            <p v-for="n in 9">{{n}}</p>
            <p v-for="n in 9" :class="{'current': count == n}">{{n}}</p>
            <p v-for="n in 9">{{n}}</p>
        </span>
    </sup>
    </span>
</template>

<script>

    export default {
        props: {
            count: [String, Number]
        },
        data() {
            return {
                //data here
            }
        },
        ready() {
            console.log(this.count)
        },
        methods: {
            
        }
    }

</script>