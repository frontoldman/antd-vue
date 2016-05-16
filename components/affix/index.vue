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
            this.placeEle();
            window.addEventListener('scroll', this._handleScroll, false);
            window.addEventListener('resize', this._handleScroll, false);
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
        beforeDestroyed () {
            window.removeEventListener('scroll', this._handleScroll);
            window.removeEventListener('resize', this._handleScroll);
        },
        methods: {
            _handleScroll() {
                this.placeEle();
            },
            placeEle() {
                var top, bottom, hasFixedClass = false;
                var scrollTop = window.scrollTop || document.documentElement.scrollTop || document.body.scrollTop;

                if (isDefined(this.offsetTop)) {
                    //起始高度 > 滚动长度 + 设置的偏移高度时候开始偏移
                    if (this.initPosition.top <= scrollTop + this._offsetTop) {
                        top = this._offsetTop + 'px';
                        hasFixedClass = true;
                    }
                    //起始高度小于0,或者起始高度 - 滚动长度 大于 视窗高度-元素高度-偏移高度
                } else if (isDefined(this.offsetBottom)) {
                    if(this.initPosition.bottom <= 0
                            || this.initPosition.bottom - scrollTop > window.innerHeight - this.$el.clientHeight - this._offsetBottom){
                        bottom = this._offsetBottom + 'px';
                        hasFixedClass = true;
                    }
                } else {
                    //默认偏移量为0
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
                //当元素位于视窗外面的时候,位置信息是负数,位置信息是相对于可视窗口左上角的信息,不影响计算。
                this.initPosition = this.$el.getBoundingClientRect();
            }
        }
    }

</script>


 
 