var user =  {
    /**
     * 用户的登陆
     * @param {*} userName 用户名
     * @param {*} password 密码
     * @param {*} callBack 回调函数
     */
    login : function(userName,password,callBack){
        // alert('user login');
        $.post(
            // urList.user_login,
            'http://localhost:8000/admin/login',
            {
                user_name : userName,
                password : password
            },function(res){
                callBack(res);
            });
    },
    //用户退出
    /**
     * 
     * @param {*} callBack 
     */
    logout : function(callBack){
        $.post(
            urList.user_logout,
            // 'http://localhost:8000/admin/logout',
            function(res){
            callBack(res);
        });
    },

    // 获取个人信息
    /**
     * 
     * @param {*} callBack 
     */
    getInfo : function(callBack){
        $.get(
            urList.user_getInfo,
            // 'http://localhost:8000/admin/getuser',
            function(res){
            callBack(res);
        });
    },

    // 修改用户信息
    editInfo : function(fd,callBack){
         // 发请求
         $.ajax({
            type:'post',
            data:fd,
            url: urList.user_editInfo,
            contentType:false,//去掉请头
            processData:false,
            success:function(res){
                callBack(res);
            }
        });
    }
};