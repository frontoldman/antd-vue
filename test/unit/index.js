/**
 * Created by zhangran on 16/5/16.
 */

var testsContext = require.context('.', true, /\.spec$/)
testsContext.keys().forEach(testsContext)