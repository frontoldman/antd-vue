/**
* Created by zhangran on 16/5/16.
*/

<style type="text/style">
    /*.ant-btn{*/
        /*display: inline-block;*/
        /*text-align: center;*/
        /*white-space: nowrap;*/
        /*font-size: 12px;*/
        /*padding:4px 15px;*/
        /*border-radius: 6px;*/
        /*background: none;*/
        /*color:#666;*/
        /*border:1px solid #d9d9d9;*/
        /*cursor:pointer;*/
        /*vertical-align: middle;*/
        /*transition: all .3s cubic-bezier(.645,.045,.355,1);*/
    /*}*/
    /*.ant-btn, .ant-btn:active, .ant-btn:focus{*/
        /*outline: 0;*/
    /*}*/
    /*.ant-btn:hover{*/
        /*color: #ff0000;*/
    /*}*/

</style>

<template>
    <button :type="buttonType" class="ant-btn {{themeClass}} {{antBtnClicked}} {{sizeClass}} {{shapeClass}} {{iconBtnClass}}" v-on:mouseup="mouseUp">
        <i v-if="icon" class="anticon {{iconClass}}"></i>
        <slot></slot>
    </button>
</template>

<script>

    const sizeKeys = {
        large: 'lg',
        small: 'sm'
    },htmlTypes = [
        'button',
        'submit',
        'reset'
    ]

    export default {
        props:{
            type: {
                type: String,
                default: 'default'
            },
            htmlType: {
                type: String,
                default: 'button'
            },
            size: {
                type: String,
                default: 'default'
            },
            shape: {
                type: String,
                default: ''
            },
            prefixCls: {
                type: String,
                default: 'ant-btn-'
            },
            icon: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                antBtnClicked: ''
            }
        },
        ready() {

        },
        computed:{
            themeClass() {
                return this.type === '' ? '' : this.prefixCls + this.type;
            },
            sizeClass() {
                return this.size === 'default' ? '' : this.prefixCls + sizeKeys[this.size];
            },
            shapeClass() {
                return this.shape === '' ? '' : this.prefixCls + this.shape;
            },
            buttonType() {
                const htmlType = this.htmlType;
                if(htmlTypes.includes(htmlType)){
                    return htmlType;
                }
                return 'button';
            },
            iconBtnClass() {

                let iconClass = '', hasChild = false;

                if(this.icon === ''){
                    return '';
                }

                //iconClass = this.prefixCls + this.icon;

                if(this._slotContents){
                    hasChild = true;
                }

                return hasChild ? iconClass : this.prefixCls + 'icon-only';
            },
            iconClass() {
                return 'anticon-' + this.icon;
            }
        },
        methods:{
            mouseUp() {
                this.antBtnClicked = 'ant-btn-clicked';
                this.$el.blur();
                setTimeout(() => this.antBtnClicked = '', 10);
            }
        }
    }

</script>