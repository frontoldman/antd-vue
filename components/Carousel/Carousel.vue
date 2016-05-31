/**
* Created by zhangran on 16/5/30.
*/

<style type="text/style">

</style>

<template>

    <div class="ant-carousel {{vertical ? 'ant-carousel-vertical' : ''}}">
        <div class="slick-initialized slick-slider">
            <div class="slick-list">
                <div class="slick-track"
                     :style="{
                        opacity: 1,
                        width: contentWidth*(contents.length+2) + 'px',
                        transform: transform,
                        transition: transition}" >
                    <div v-if="effect === 'scrollx'" :style="{width: contentWidth + 'px'}" class="slick-slide">{{{contents[contents.length-1]}}}</div>
                    <div v-for="child in contents" :style="getItemStyle($index)" class="slick-slide {{$index === current ? 'slick-active' : ''}}">{{{child}}}</div>
                    <div v-if="effect === 'scrollx'" :style="{width: contentWidth + 'px'}" class="slick-slide">{{{contents[0]}}}</div>
                </div>
            </div>
            <ul class="slick-dots" style="display: block;" v-if="dots">
                <li class="{{$index === current ? 'slick-active' : ''}}" @click="clickDot($index)" v-for="n in contents"><button>{{$index}}</button></li>
            </ul>
        </div>
    </div>

</template>

<script>

    export default {
        props: {
            effect: {
                type: String,
                default: 'scrollx'
            },
            dots: {
                type: Boolean,
                default: true
            },
            vertical: {
                type: Boolean,
                default: false
            },
            autoplay: {
                type: Boolean,
                default: false
            },
            easing: {
                type: String,
                default: 'linear'
            },
            beforeChange: Function,
            afterChange: Function

        },
        data() {
            return {
                current: 0,
                contents: [],
                contentWidth: 0,
                opacity: 1,
                transition: 'none',
                autoTimeout: null
            }
        },
        ready() {
            this.initDom();
            this.getShapeSize();
            this.initAutoPlay();
        },
        beforeDestroy() {
            clearTimeout(this.autoTimeout);
        },
        computed: {
            transform() {
                if(this.effect === 'scrollx'){
                    return 'translate3d(-'+ (this.contentWidth * (this.current+1)) +'px, 0px, 0px)';
                }
                return false;
            }
        },
        methods: {
            initDom() {
                const { children } = this._slotContents.default;
                let contentsAry = [];
                if(children && children.length){
                    contentsAry = Array.from(children);
                }
                this.contents = contentsAry.map( child => child.outerHTML );
            },
            getShapeSize() {
                const { width } = this.$el.getBoundingClientRect();
                this.contentWidth = width;
            },
            clickDot(index) {
                this.autoTimeout && clearTimeout(this.autoTimeout);
                this.addTransition();
                this.beforeChange && this.beforeChange();
                this.current = index;
                this.afterChange && this.afterChange();
                this.initAutoPlay();
            },
            getItemStyle(index) {
                let style = {
                    width: this.contentWidth + 'px'
                };

                if(this.effect === 'fade'){
                    style.position = 'relative';
                    style.transition = 'opacity 500ms ease';
                    style.left = -index * this.contentWidth + 'px';
                    if(index === this.current){
                        style.opacity = 1;
                    }else{
                        style.opacity = 0;
                    }
                }

                return style
            },
            initAutoPlay() {
                if(this.autoplay){
                    this.autoTimeout = setTimeout(() => {
                        this.addTransition();
                        this.beforeChange && this.beforeChange();
                        this.current = (this.current+1) % this.contents.length;
                        this.afterChange && this.afterChange();
                        this.initAutoPlay();
                    }, 1500)
                }
            },
            addTransition() {
                if(this.effect === 'scrollx'){
                    this.transition = '500ms ' + this.easing;
                    setTimeout(() => this.transition = 'none',600)
                }
            }
        }
    }

</script>