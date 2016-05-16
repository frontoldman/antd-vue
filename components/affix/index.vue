/**
* Created by randada on 2016/5/13.
*/

<style type="text/css">
    .affix {
        position: fixed;
    }
</style>

<template>
    <div :class="hasFixedClass ? 'affix' : ''" :style="affixStyle">
        <slot></slot>
    </div>
</template>

<script>

    import {isDefined} from '../../utils/'

    export default {
        props: [
            'offsetTop',
            'offsetBottom'
        ],
        data() {
            return {
                initPosition: null,
                hasFixedClass: false,
                top: null,
                bottom: null
            }
        },
        ready () {
            this.getInitPosition();
            window.addEventListener('scroll', this._handleScroll, false);
        },
        computed: {
            affixStyle() {
                return {
                    top: this.top,
                    bottom: this.bottom
                }
            },
            _offsetTop() {
                return this.offsetTop * 1;
            },
            _offsetBottom() {
                return this.offsetBottom * 1;
            }
        },
        destroyed () {

        },
        methods: {
            _handleScroll() {
                this.placeEle();
            },
            placeEle() {
                var top, bottom, hasFixedClass = false;
                var scrollTop = window.scrollTop || document.documentElement.scrollTop || document.body.scrollTop;
                var docHeight = document.body.clientHeight;

                if (isDefined(this.offsetTop)) {
                    if (this.initPosition.top <= scrollTop + this._offsetTop) {
                        top = this._offsetTop + 'px';
                        hasFixedClass = true;
                    }
                } else if (isDefined(this.offsetBottom)) {
                    if(this.initPosition.bottom >= (docHeight - scrollTop) + this._offsetBottom){

                    }

                    bottom = this._offsetBottom + 'px';
                    hasFixedClass = true;
                } else {
                    if (this.initPosition.top <= scrollTop) {
                        top = 0;
                        hasFixedClass = true;
                    }
                }

                this.top = top;
                this.bottom = bottom;
                this.hasFixedClass = hasFixedClass;

            },
            getInitPosition() {
                //当元素位于视窗外面的时候,位置信息是负数,不影响计算
                this.initPosition = this.$el.getBoundingClientRect();
            },
            getScrollTop() {



            }
        }
    }

</script>


 
 