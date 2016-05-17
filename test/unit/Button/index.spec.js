/**
 * Created by zhangran on 16/5/17.
 */

import * as _ from "lodash";
import Vue from "vue";
import * as Button from "../../../components/Button/Button.vue";

describe('Button', function () {


  it('should computed correct', () => {

    let _button = _.assign(Button);
    _button.type = 'primary';
    _button.prefixCls = 'ant-btn-';

    expect(_button.computed.themeClass.call(_button)).toBe('ant-btn-primary');

    _button.size = 'default';
    expect(_button.computed.sizeClass.call(_button)).toBe('');

    _button.size = 'large';
    expect(_button.computed.sizeClass.call(_button)).toBe('ant-btn-lg');

    _button.size = 'small';
    expect(_button.computed.sizeClass.call(_button)).toBe('ant-btn-sm');

    _button.shape = '';
    expect(_button.computed.shapeClass.call(_button)).toBe('');

    _button.shape = 'circle';
    expect(_button.computed.shapeClass.call(_button)).toBe('ant-btn-circle');

    _button.htmlType = 'button';
    expect(_button.computed.buttonType.call(_button)).toBe('button');

    _button.htmlType = 'submit';
    expect(_button.computed.buttonType.call(_button)).toBe('submit');

    _button.htmlType = 'abc';
    expect(_button.computed.buttonType.call(_button)).toBe('button');

    _button.icon = '';
    expect(_button.computed.iconBtnClass.call(_button)).toBe('');

    _button._slotContents = false;
    _button.icon = 'search'
    expect(_button.computed.iconBtnClass.call(_button)).toBe('ant-btn-icon-only');

  })

  it('should has correct class', function () {

    var vm = new Vue({
      el: 'body',
      template: '<Button type="primary" >hi</Button>',
      replace: false,
      components: {
        Button
      }
    })

    expect(vm.$el.getElementsByTagName('button')[0].className).toContain('ant-btn-primary');
    expect(vm.$el.getElementsByTagName('button')[0].className).toContain('ant-btn');

  })

  it('should has correct htmlType', function () {

    var vm = new Vue({
      el: 'body',
      template: '<Button html-type="submit">hi</Button>',
      replace: false,
      components: {
        Button
      }
    })

    expect(vm.$el.getElementsByTagName('button')[0].type).toContain('submit');

  })

  it('should has correct size', function () {

    var vm = new Vue({
      el: 'body',
      template: '<Button size="small" html-type="submit">hi</Button>',
      replace: false,
      components: {
        Button
      }
    })

    expect(vm.$el.getElementsByTagName('button')[0].className).toContain('ant-btn-sm');
    expect(vm.$el.getElementsByTagName('button')[0].className).toContain('ant-btn');

  })

  it('should has correct shape', function () {

    var vm = new Vue({
      el: 'body',
      template: '<Button shape="circle">hi</Button>',
      replace: false,
      components: {
        Button
      }
    })

    expect(vm.$el.getElementsByTagName('button')[0].className).toContain('ant-btn-circle');
    expect(vm.$el.getElementsByTagName('button')[0].className).toContain('ant-btn');

  })

  it('should has correct icon', function () {

    var vm = new Vue({
      el: 'body',
      template: '<Button icon="search">hi</Button>',
      replace: false,
      components: {
        Button
      }
    })

    expect(vm.$el.getElementsByClassName('anticon-search').length).toEqual(1);

  })

  it('should has correct disabled', function () {

    var vm = new Vue({
      el: 'body',
      template: '<Button disabled>hi</Button>',
      replace: false,
      components: {
        Button
      }
    })

    expect(vm.$el.getElementsByTagName('button')[0].hasAttribute('disabled')).toBeTruthy();

  })

  it('should has correct loading', function () {

    var vm = new Vue({
      el: 'body',
      template: '<Button :loading="loading">hi</Button>',
      replace: false,
      data:{
        loading:true
      },
      components: {
        Button
      }
    })

    expect(vm.$el.getElementsByClassName('ant-btn-loading').length).toEqual(1);
    expect(vm.$el.getElementsByClassName('anticon-loading').length).toEqual(1);

  })



})