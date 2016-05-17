/**
 * Created by 52913 on 2016/5/13.
 */
// import 'reset.css'
import 'antd/dist/antd.css'
import Vue from 'vue'
import * as Affix from './Affix/Affix.vue'
import * as Button from './Button/Button.vue'
import * as ButtonGroup from './Button/ButtonGroup.vue'
import * as Icon from './Icon/Icon.vue'
import * as Row from './Layout/Row.vue'
import * as Column from './Layout/Column.vue'

new Vue({
    el: 'body',
    components: {
        Affix,
        Button,
        ButtonGroup,
        Icon,
        Row,
        Column
    },
    data:{
      loading: false
    },
    methods:{
        testClick() {
            console.log('click happened!')
        }
    }
})

