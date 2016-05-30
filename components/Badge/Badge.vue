/**
* Created by zhangran on 16/5/18.
*/

<style type="text/style">

</style>

<template>
    <span class="ant-badge" title="{{count}}">
        <slot></slot><sup
            data-show="true"
            class="ant-scroll-number ant-badge-count" height="{{height}}"
            :style="supStyle"
        >
        <span v-if="count*1<overflowCount*1" v-for="itemCount in countAry" track-by="$index"
              :style="{transform: 'translate3d(0px, ' + (-height*(itemCount*1+9)) + 'px, 0px', height: height + 'px'}"
              class="ant-scroll-number-only"
            style="transition: none; ">
            <p v-for="n in 9">{{n}}</p>
            <p v-for="n in 9" :class="{'current': count == n}">{{n}}</p>
            <p v-for="n in 9">{{n}}</p>
        </span>
        <span v-if="count*1>=overflowCount*1">{{(overflowCount*1-1) + '+'}}</span>

    </sup>
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
            }
        },
        data() {
            return {
                countAry: [],
                supStyle: {}
            }
        },
        ready() {
            this.countAry = (this.count + '').split('');

            if(typeof this.style === 'String'){
                this.supStyle = JSON.parse(this.badgeStyle);
            }else{
                this.supStyle = this.badgeStyle;
            }
        },
        methods: {
            
        }
    }

</script>