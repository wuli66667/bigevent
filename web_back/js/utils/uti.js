var user =  {
    /**
     * 用户的登陆
     * @param {*} userName 用户名
     * @param {*} password 密码
     * @param {*} callBack 回调函数
     */
    login : function(userName,password,callBack){
        // alert('user login');
        $.post('http://localhost:8000/admin/login',{
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
        $.post('http://localhost:8000/admin/logout',function(res){
            callBack(res);
        })
    },

    // 获取个人信息
    /**
     * 
     * @param {*} callBack 
     */
    getInfo : function(callBack){
        $.get('http://localhost:8000/admin/getuser',function(res){
            callBack(res);
        })
    }
};