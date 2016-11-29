/**
 * Created by brance on 2016/10/24.
 */
//a.js
define(function(require, exports, module){
  console.log('a.js执行');
  return {
    hello: function(){
      console.log('hello, a.js');
    }
  }
});