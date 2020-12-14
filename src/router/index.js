import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/login'
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
  },


  {
    path: '/index',
    name: 'index',
    component: () => import('../views/pages/index/index.vue'),
    redirect: '/backstage',
    children: [{
        path: '/backstage',
        name: 'backstage',
        component: () => import('../views/pages/index/backstage.vue')
      },
      {
        path: '/shoplist',
        name: 'shoplist',
        component: () => import('../views/pages/index/shoplist.vue')
      },
      {
        path: '/Album',
        name: 'Album',
        component: () => import('../views/pages/index/Album.vue')
      },


    ]
  },




  {
    path: '/shop',
    name: 'shop',
    component: () => import('../views/pages/shop/index.vue'),
    redirect: '/shoplists',
    children: [{
        path: '/shoplists',
        name: 'shoplists',
        component: () => import('../views/pages/shop/shoplists.vue')
      },
      {
        path: '/classify',
        name: 'classify',
        component: () => import('../views/pages/shop/classify.vue')
      },
      {
        path: '/shopsize',
        name: 'shopsize',
        component: () => import('../views/pages/shop/shopsize.vue')
      },


    ]
  },

  {
    path: '/order',
    name: 'order',
    component: () => import('../views/pages/order/index.vue'),
    redirect: '/ordermanage',
    children: [{
        path: '/ordermanage',
        name: 'ordermanage',
        component: () => import('../views/pages/order/ordermanage.vue')
      },
      {
        path: '/invoice',
        name: 'invoice',
        component: () => import('../views/pages/order/invoice.vue')
      },
      {
        path: '/sale',
        name: 'sale',
        component: () => import('../views/pages/order/sale.vue')
      },
    ]
  },

  {
    path: '/member',
    name: 'member',
    component: () => import('../views/pages/member/index.vue'),
    redirect: '/memberlist',
    children: [{
        path: '/memberlist',
        name: 'memberlist',
        component: () => import('../views/pages/member/memberlist.vue')
      },
      {
        path: '/membergrade',
        name: 'membergrade',
        component: () => import('../views/pages/member/membergrade.vue')
      },
    ]
  },

]

const router = new VueRouter({
  routes
})

//全局守卫
router.beforeEach((to, from, next) => {
  let xztime = new Date().getTime()
  if (localStorage.getItem("token") &&localStorage.getItem("dueTime") - xztime >0) {
    next(); 
  } else {
    if(to.path != "/login"){
      alert("您还没有登录呢！")
    }

    if (to.path == "/login") {
      next();
    } else {
      next("login");
    }
  }
});

export default router