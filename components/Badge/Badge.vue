/**
* Created by zhangran on 16/5/18.
*/

<style type="text/style">

</style>

<template>
    <span class="ant-badge" title="{{count}}">
        <slot></slot><sup v-if="!dot"
            data-show="true"
            class="ant-scroll-number ant-badge-count" height="{{height}}"
            :style="supStyle"
        >
        <span v-if="count && count*1<overflowCount*1" v-for="itemCount in countAry" track-by="$index"
              :style="{transform: 'translate3d(0px, ' + (-height*(itemCount*1+10)) + 'px, 0px', height: height + 'px'}"
              class="ant-scroll-number-only"
            >
            <p v-for="n in 10">{{n}}</p>
            <p v-for="n in 10" :class="{'current': count == n}">{{n}}</p>
            <p v-for="n in 10">{{n}}</p>
        </span>

        <span v-if="count && count*1>=overflowCount*1">{{(overflowCount*1-1) + '+'}}</span>
    </sup><sup v-if="dot" data-show="true"
               class="ant-scroll-number ant-badge-dot"
               :style="supStyle"></sup>
    </span>
</template>

<script>

    export default {
        props: {
            count: [String, Number],
            height: {
                type: [String, Number],
                default: 18
            },
            badgeStyle: {
                type: [Object, String]
            },
            overflowCount: {
                type: [String, Number],
                default: 100
            },
            dot: Boolean
        },
        data() {
            return {

            }
        },
        computed: {
            countAry() {
                return (this.count + '').split('');
            },
            supStyle() {
                return typeof this.style === 'String'
                        ? JSON.parse(this.badgeStyle)
                        : this.badgeStyle ;
            }
        },
        ready() {

        },
        methods: {
            
        }
    }

</script>