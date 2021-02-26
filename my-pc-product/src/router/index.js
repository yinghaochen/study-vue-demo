import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main.vue'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
  {
    // 重定向，用来指向一打开网页就跳转到哪个路由
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/',
        redirect: '/Home'
      },
      {
        path: '/Home',
        name: 'Home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/mytable',
        name: 'MyTable',
        component: ()=> import('../views/mytable.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
