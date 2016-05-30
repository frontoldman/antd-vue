/**
* Created by zhangran on 16/5/30.
*/

<style type="text/style">

</style>

<template>

    <div class="ant-carousel">
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
            <ul class="slick-dots" style="display: block;">
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
            }
        },
        data() {
            return {
                current: 0,
                contents: [],
                contentWidth: 0,
                opacity: 1,
                transition: 'none'

            }
        },
        ready() {
            this.initDom();
            this.getShapeSize();

        },
        computed: {
            transform() {
                if(this.effect === 'scrollx'){
                    return 'translate3d(-'+ (this.contentWidth * (this.current+1)) +'px, 0px, 0px)';
                }
                return false;
            },
            itemStyle() {
                let style = {
                    width: this.contentWidth + 'px'
                };

                if(this.effect === 'fade'){

                }

                return style
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
                if(this.effect === 'scrollx'){
                    this.transition = '500ms ease';
                    setTimeout(() => this.transition = 'none',600)
                }else if(this.effect === 'fade'){

                }

                this.current = index;
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
            }
        }
    }

</script>