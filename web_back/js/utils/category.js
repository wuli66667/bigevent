var category = {
    
    // 显示
   show : function(callBack){
    // alert(1);
    $.get(
        urList.category_show,
        function(res){
        callBack(res);
    });
   },
//    添加
//    add : function(name,slug,callBack){
//     $.post(
//         urList.user_category_add,
//         {name:name,slug:slug},
//         function(res){
//         callBack(res);
//     });

//    },
    add: function(name,slug,callBack) {
       $.post('http://localhost:8000/admin/category_add',{name:name,slug:slug},function(res){
        callBack(res);
       })
     },
//    删除
   del : function(){

   },
//    更新
   edit : function(){

   }


};