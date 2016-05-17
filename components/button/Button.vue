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
    <button
            :type="buttonType"
            :disabled="disabled"
            @click="click"
            class="ant-btn {{themeClass}} {{antBtnClicked}} {{sizeClass}} {{shapeClass}} {{iconBtnClass}} {{loading ? 'ant-btn-loading' : ''}}"
            @mouseup="mouseUp">
        <i v-if="icon && !loading" class="anticon {{iconClass}}"></i>
        <i v-if="loading" class="anticon anticon-loading"></i>
        <span v-if="hasSlot">
            <slot></slot>
        </span>
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
            },
            disabled:{      //TODO 取消布尔值,怎么才能获取当有这个值就为true呢
                type: Boolean,
                default: false
            },
            onClick: {
                type: null
            },
            loading: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                antBtnClicked: ''
            }
        },
        ready() {},
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
                if(htmlTypes.indexOf(htmlType) > -1){
                    return htmlType;
                }
                return 'button';
            },
            iconBtnClass() {
                let iconClass = '';
                if(this.icon === ''){
                    return '';
                }

                return this._slotContents ? iconClass : this.prefixCls + 'icon-only';
            },
            iconClass() {
                return 'anticon-' + this.icon;
            },
            hasSlot() {
                return this._slotContents;
            }

        },
        methods:{
            mouseUp() {
                this.antBtnClicked = 'ant-btn-clicked';
                this.$el.blur();
                setTimeout(() => this.antBtnClicked = '', 10);
            },
            click(e) {
                if(this.disabled){
                    return;
                }

                if(this.onClick){
                    this.onClick(e);
                }
            }
        }
    }

</script>