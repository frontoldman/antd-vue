/**
* Created by zhangran on 16/5/31.
*/

<style type="text/style">

</style>

<template>
    <div class="ant-collapse" @click="clickEvents($event)">
        <slot></slot>
    </div>
</template>

<script>

    export default {
        props: {
            defaultActiveKey: Array
        },
        data() {
            return {
                panelsContents: [],
                panelHeaders: []
            }
        },
        ready() {
            console.log(this.defaultActiveKey)
            this.getDetails();
        },
        methods: {
            getDetails() {
                const panelHeaders = this.$el.querySelectorAll('.ant-collapse-header');
                const panelContents = this.$el.querySelectorAll('.ant-collapse-content');

                this.panelsContents = Array.from(panelContents).map( (content, index) => {
                            const key = content.parentNode.getAttribute('key');
                            if(this.defaultActiveKey.indexOf(key*1) !== -1){
                                content.className = 'ant-collapse-content ant-collapse-content-active'
                            }else{
                                content.className = 'ant-collapse-content ant-collapse-content-active'
                            }

                            return {
                                content,
                                height: content.getBoundingClientRect().height
                            }
                        } );

                this.panelHeaders = Array.from(panelHeaders).map( (header, index) => {
                    header.addEventListener('click', event => {

//                                this.panelsContents.forEach( content => {
//                                    content.className = 'ant-collapse-content ant-collapse-content-active';
//                                } )

                        this.panelsContents[index].content.className = 'ant-collapse-content ant-collapse-content-active';
                    }, false);

                    return {
                        header
                    }
                } )
            },
            clickEvents(event) {
                const { target } = event;
                //this._getParentsByClass(target);
            },
//            _getParentsByClass(el) {
//                let _el = el;
//                let classNamesAry = _el.className.split(/\s+/);
//                while(
//                _el
//                && classNamesAry.indexOf('ant-collapse-header') === -1
//                && classNamesAry.indexOf('ant-collapse-item') === -1
//                        ){
//                    _el = _el.parentNode;
//                    classNamesAry = _el.className.split(/\s+/);
//                }
//
//                let content;
//                if(classNamesAry.indexOf('ant-collapse-header') === -1){
//                    content = _el.parentNode.querySelector('.ant-collapse-content');
//
//                }
//            }
        }
    }

</script>