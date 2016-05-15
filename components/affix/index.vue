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

    import { isDefined } from '../../utils/'

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
                    top = this.offsetTop + 'px';
                }else if(isDefined(this.offsetBottom)){
                    bottom = this.offsetBottom + 'px';
                }else{
                    top = 0;
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


 
 