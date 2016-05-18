/**
 * Created by zhangran on 16/5/18.
 */

import Vue from 'vue'
import Alert from '../../../components/Alert/Alert.vue'
import _ from 'lodash'

describe('Alert', function () {

  it('should computed alertClasses correctly', () => {

    var _Alert = _.assign(Alert);

    _Alert.type = 'success';
    _Alert.description = '这事描述啊';
    _Alert.showIcon = true;

    var alertClasses = _Alert.computed.alertClasses.call(_Alert)

    expect(alertClasses['ant-alert']).toBe(1);
    expect(alertClasses['ant-alert-success']).toBe('success');
    expect(alertClasses['ant-alert-with-description']).toBe('这事描述啊');
    expect(alertClasses['ant-alert-no-icon']).toBeFalsy();

  })

  it('should computed iconClasses correctly', () => {

    var _Alert = _.assign(Alert);

    _Alert.type = 'success';
    _Alert.description = '这事描述啊';
    _Alert.showIcon = true;

    var iconClasses = _Alert.computed.iconClasses.call(_Alert)

    expect(iconClasses['anticon']).toBe(1);
    expect(iconClasses['ant-alert-icon']).toBe(1);
    expect(iconClasses['anticon-check-circle-o']).toBeTruthy(1);

  })

})