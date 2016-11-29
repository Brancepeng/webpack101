/**
 * Created by brance on 2016/10/24.
 */
//main.js
require(['a', 'b'], function(a, b){
  console.log('main.js执行');
  a.hello();
  $('#b').click(function(){
    b.hello();
  });
})