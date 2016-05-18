/**
* Created by zhangran on 16/5/18.
*/

<style type="text/style">

</style>

<template>
    <div :class="alertClasses">
        <i v-show="showIcon" :class="iconClasses"></i>
        <span class="ant-alert-message">{{message}}</span>
        <span class="ant-alert-description" v-if="description">{{description}}</span>
        <a class="ant-alert-close-icon" @click="close" v-show="closable && !closeText"><i
                class=" anticon anticon-cross"></i></a>
        <a v-show="closable && closeText" class="ant-alert-close-icon">不再提醒</a>
    </div>
</template>

<script>

    export default {
        props: {
            message: String,
            type: String,
            description: String,
            closable: Boolean,
            onClose: Function,
            showIcon: Boolean,
            closeText: String
        },
        computed: {
            alertClasses() {
                return {
                    [`ant-alert`]: 1,
                    [`ant-alert-${this.type}`]: this.type,
                    [`ant-alert-with-description`]: this.description,
                    [`ant-alert-no-icon`]: !this.showIcon
                }
            },
            iconClasses() {
                const description = this.description;
                const iconStyles = {
                    success: !description ? 'anticon-check-circle' : 'anticon-check-circle-o',
                    info: !description ? 'anticon-info-circle' : 'anticon-info-circle-o',
                    warning: !description ? 'anticon-exclamation-circle' : 'anticon-exclamation-circle-o',
                    error: !description ? 'anticon-cross-circle' : 'anticon-cross-circle-o'
                }

                return {
                    ['anticon']: 1,
                    ['ant-alert-icon']: 1,
                    [iconStyles[this.type]]: this.showIcon
                }
            }
        },
        ready() {

        },
        methods: {
            close() {
                this.onClose && this.onClose();
            }
        }
    }

</script>