var category = {
    
    // 显示
   show : function(callBack){
    // alert(1);
    $.get(
        urList.user_category,
        function(res){
        callBack(res);
    });
   },
//    添加
   add : function(){

   },
//    删除
   del : function(){

   },
//    更新
   edit : function(){

   }


};