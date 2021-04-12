import Vue from 'vue'
import Router from 'vue-router'
const index = ()=>import('@/components/index/index')
const classify = () => import('@/components/classify/classify')
const shopcar =() => import ('@/components/shopcar/shopcar')
const my =() => import ('@/components/my/my')
Vue.use(Router)
const routes =[
    {
      path: '/',
      meta:{
        title:'首页'
      },
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'index',
      meta:{
        title:'首页'
      },
      component: index
    },
    {
      path:'/classify',
      name:'claassify',
      meta:{
        title:'分类'
      },
      component:classify
    },
    {
      path:'/shopcar',
      name:'shopcar',
      meta:{
        title:'购物车'
      },
      component:shopcar
    },
    {
      path:'/my',
      name:'my',
      meta:{
        title:'我的'
      },
      component:my
    }
  ]
const router=new Router({
  routes
})
//全局导航守卫(前置钩子)
router.beforeEach((to, from, next) => {
  //从from到to
  // console.log(to);
  document.title=to.meta.title;
  //next函数必须掉用哪个
  next();
});
//全局导航守卫(后置钩子)
//beforeEach是路由跳转前执行的，afterEach是路由跳转后执行的。
// afterEach只有两个参数  afterEach((to,from)=>{})
router.afterEach((to, from) => {
  // console.log("我是后置钩子");
});
//将router对象传入Vue实例
export default router;
