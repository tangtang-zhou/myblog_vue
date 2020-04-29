import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login'
import Home from '../components/home'
import Welcome from '../components/Welcome'
import Users from '../components/user/Users'
import Blogs from '../components/blog/Blogs'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/user',
        component: Users
      },
      {
        path: '/blog',
        component: Blogs
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
// 挂载路由导航守卫
/* router.beforeEach((to, from, next) => {
  if (to.path === '/login') next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
}) */
// to 将要访问的路径
// from 代表从哪个路径跳转而来
// next 是一个函数，表示放行
// next() 放行 next('/login') 强制跳转

export default router
