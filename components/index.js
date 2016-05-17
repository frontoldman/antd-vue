/**
 * Created by 52913 on 2016/5/13.
 */
// import 'reset.css'
import 'antd/dist/antd.css'
import Vue from 'vue'
import * as Affix from './Affix/index.vue'
import * as Button from './Button/index.vue'

new Vue({
    el: 'body',
    components: {
        Affix,
        Button
    }
})

