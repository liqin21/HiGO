import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('views/Home');
const Category = () => import('views/Category')
const ShoppingBar = () => import('views/ShoppingBar')
const Profile = () => import('views/Profile')

const routes = [
  {
    path: '/',
    redirect: 'home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/category',
    name: 'category',
    component: Category,
    meta: {
      title: '分类'
    }
  },
  {
    path: '/shoppingbar',
    name: 'shoppingbar',
    component: ShoppingBar,
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      title: '我的'
    }
  },
]

const router = new Router({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})

export default router;
