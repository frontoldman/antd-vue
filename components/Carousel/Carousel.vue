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
                        transform: 'translate3d(-'+ (contentWidth * (current+1)) +'px, 0px, 0px)',
                        transition: transition}" >
                    <div :style="{width: contentWidth + 'px'}" class="slick-slide">{{{contents[contents.length-1]}}}</div>
                    <div v-for="child in contents" :style="{width: contentWidth + 'px'}" class="slick-slide {{$index === current ? 'slick-active' : ''}}">{{{child}}}</div>
                    <div :style="{width: contentWidth + 'px'}" class="slick-slide">{{{contents[0]}}}</div>
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
            //props here
        },
        data() {
            return {
                current: 0,
                contents: [],
                contentWidth: 0,
                opacity: 1,
                transition: false
            }
        },
        ready() {
            this.initDom();
            this.getShapeSize();
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
                this.transition = '500ms ease';
                this.current = index;
                setTimeout(() => this.transition = false,600)
            }
        }
    }

</script>