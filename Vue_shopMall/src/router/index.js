import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/about',
      name: 'about',

      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
      mata: {
        index: 1
      }
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/User.vue'),
      mata: {
        index: 1
      }
    },
    {
      path: '/product-list',
      name: 'product-list',
      component: () => import('@/views/ProductList.vue'),
      meta: {
        index: 2
      }
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('@/views/Category.vue'),
      meta: {
        index: 1
      }
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => {
        import('@/views/ProductDetial.vue')
      },
      meta: {
        index: 3
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/Cart.vue'),
      meta: {
        index: 1
      }
    },
    {
      path: '/createOrder',
      name: 'createOrder',
      component: () => import('@/views/Cart.vue'),
      mata: {
        index: 1
      }
    },
    {
      path: '/address-edit',
      name: 'address-edit',
      component: () => import('@/views/AddressEdit.vue'),
      meta: {
        index: 3
      }
    },
    {
      path: 'order',
      name: 'order',
      component: () => {
        import('@/views/Order.vue')
      },
      meta: {
        index: 2
      }
    },
    {
      path: 'order-detail',
      name: 'order-detail',
      component: () => {
        import('@/views/OrderDetail.vue')
      },
      meta: {
        index: 2
      }
    },
    {
      path:'/setting',
      name:'setting',
      component:() =>{
        import('@/views/Setting.vue')
      },
      meta:{
        index:2
      }
    
    },
    {
      path:'/about',
      name:'about',
      component:()=>{
        import('@/views/About.vue')
      },

      meta:{
        index:2
      }
    }


  ]
})

export default router
