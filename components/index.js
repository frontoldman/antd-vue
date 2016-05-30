/**
 * Created by 52913 on 2016/5/13.
 */
// import 'reset.css'
import "antd/dist/antd.css";
import Vue from "vue";
import * as Affix from "./Affix/Affix.vue";
import * as Button from "./Button/Button.vue";
import * as ButtonGroup from "./Button/ButtonGroup.vue";
import * as Icon from "./Icon/Icon.vue";
import * as Row from "./Layout/Row.vue";
import * as Column from "./Layout/Column.vue";
import * as Alert from "./Alert/Alert.vue";
import * as Badge from "./Badge/Badge.vue";

Vue.component('Affix', Vue.extend(Affix));
Vue.component('Btn', Vue.extend(Button));
Vue.component('ButtonGroup', Vue.extend(ButtonGroup));
Vue.component('Icon', Vue.extend(Icon));
Vue.component('Row', Vue.extend(Row));
Vue.component('Column', Vue.extend(Column));
Vue.component('Alert', Vue.extend(Alert));
Vue.component('Badge', Vue.extend(Badge));

window.Vue = Vue;



