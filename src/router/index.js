import Vue from 'vue'
import Router from 'vue-router'

import home  from "@/routerPage/home.vue"
import seeHos  from "@/routerPage/seeHos.vue"
import me  from "@/routerPage/me.vue"
import routerpass from "@/routerPage/routerpass.vue"
import homeDetail from "@/routerPage/homeDetail.vue"
import findHouse from "@/routerPage/findHouse.vue"


Vue.use(Router)
const router = new Router({
  // mode:"history",
  routes:[
      
    {
      path: '/routerpass',name: 'routerpass', component: routerpass,
      children: [
        {
          path: "/me", name: 'me', component: me,
        },
        {
          path: "/seeHos", name: 'seeHos', component: seeHos,
        },
        {
          path: "/home", name: 'home', component: home,
        }
      ]
    },
    {
      path: "/homeDetail", name: 'homeDetail', component: homeDetail,
    },
    {
      path: "/findHouse", name: 'findHouse', component: findHouse,
    }
  ]

});

// 输出router
export default router;
  