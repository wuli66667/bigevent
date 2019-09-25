var BASE_URL = 'http://localhost:8000';
var urList = {
    user_login: BASE_URL + '/admin/login',
    user_logout: BASE_URL + '/admin/logout',
    user_getInfo: BASE_URL + '/admin/getuser',

    // user_category: BASE_URL + '/admin/category_search',
    // category_add: BASE_URL + '/admin/category_add'
    category_show: BASE_URL + '/admin/category_search',
    category_add: BASE_URL + '/admin/category_add',
    category_del: BASE_URL + '/admin/category_delete',

    category_edit: BASE_URL + '/admin/category_edit',

    // 修改地址
    user_editInfo: BASE_URL + '/admin/userInfo_edit'
};