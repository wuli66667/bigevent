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
    add: function(name,slug,callBack) {
       $.post(
        urList.category_add,{name:name,slug:slug},function(res){
        callBack(res);
       })
     },


//    删除
   del: function(id,callBack){
        $.post(
            urList.category_del,{id:id},function(res){
                callBack(res); 
            })
   },
//    更新
   edit : function(id,name,slug,callBack){
    $.post(
        urList.category_edit,
        {id:id,name:name,slug:slug},function(res){
            callBack(res);
        })
   },


};