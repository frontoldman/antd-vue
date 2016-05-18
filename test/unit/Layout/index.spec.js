/**
 * Created by zhangran on 16/5/18.
 */

import Vue from 'vue'
import * as Row from '../../../components/Layout/Row.vue'
import * as Column from '../../../components/Layout/Column.vue'
import _ from 'lodash'

describe('Layout', function () {

  it('Row should computed css correctly', () => {

    var _Row = _.assign(Row),
        classes;

    _Row.type = 'flex';
    _Row.align = 'top';
    _Row.justify = 'start';

    classes = _Row.computed.classes.call(_Row);


    expect(classes.row).toBe(1);
    expect(classes['row-flex']).toBe('flex');
    expect(classes['row-flex-top']).toBe('top');
    expect(classes['row-flex-start']).toBe('start');

  })

  it('Column should computed css correctly', () => {

    var _Column = _.assign(Column),
      classes;

    _Column.span = '1';
    _Column.offset = '2';
    _Column.push = '2';
    _Column.pull = '2';
    _Column.order = '2';

    classes = _Column.computed.classes.call(_Column);

    expect(classes['col-1']).toBe('1');
    expect(classes['col-offset-2']).toBe('2');
    expect(classes['col-push-2']).toBe('2');
    expect(classes['col-pull-2']).toBe('2');
    expect(classes['col-order-2']).toBe('2');

  })

})