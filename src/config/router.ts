/*
 * @Author: huajian
 * @LastEditors: huajian
 */
interface Router{
    title: string;
    path: string;
    page: any;
}
const routers: Router[] = [
    {
        title: '登陆',
        path: '/login.html',
        page: require('../container/login').default
    },
    {
        title: '新用户注册',
        path: '/aaa.html',
        page: require('../container/aaa').default
    }
];

export default routers;
