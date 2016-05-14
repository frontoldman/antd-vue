/**
* Created by randada on 2016/5/13.
*/

<style type="text/css">
    .affix {
        position: fixed;
    }
</style>

<template>
    <div class="affix" v-bind:style="affixStyle">
        <slot></slot>
    </div>
</template>

<script>

    function isDefined(val){
        console.log(val)
        console.log(typeof val)
        return typeof val !== 'undefined';
    }

    export default {
        props:[
            'offsetTop',
            'offsetBottom'
        ],
        ready () {

        },
        computed: {
            affixStyle() {

                var top, bottom;

                if(isDefined(this.offsetTop)){
                    top = this.offsetTop + 'px'
                    console.log(11);
                }else if(isDefined(this.offsetBottom)){
                    bottom = this.offsetBottom + 'px'
                }

                return {
                    top,
                    bottom
                }
            }
        },
        destroyed () {

        }
    }

</script>


 
 