/**
 * Created by zhangran on 16/5/16.
 */

import Vue from 'vue'
import Affix from '../../../components/Affix/Affix.vue'

describe('affix', function () {

  it('should has default setting', () => {
    expect(Affix.props.length).toBe(2);
  })

})