import Vue from 'vue'
import Router from 'vue-router'

import home  from "@/routerPage/home.vue"
import seeHos  from "@/routerPage/seeHos.vue"
import me  from "@/routerPage/me.vue"
import routerpass from "@/routerPage/routerpass.vue"
import homeDetail from "@/routerPage/homeDetail.vue"
import findHouse from "@/routerPage/findHouse.vue"

// me
import appointment from "@/routerPage/me/appointment.vue"
import manage from "@/routerPage/me/manage.vue"
import msg from "@/routerPage/me/msg.vue"
import pay from "@/routerPage/me/pay.vue"
import rented from "@/routerPage/me/rented.vue"
import send from "@/routerPage/me/send.vue"
import set from "@/routerPage/me/set.vue"


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
    },
    {
      path: "/appointment", name: 'appointment', component: appointment,
    },
    {
      path: "/manage", name: 'manage', component: manage,
    },
    {
      path: "/msg", name: 'msg', component: msg,
    },
    {
      path: "/pay", name: 'pay', component: pay,
    },
    {
      path: "/rented", name: 'rented', component: rented,
    },
    {
      path: "/send", name: 'send', component: send,
    },
    {
      path: "/set", name: 'set', component: set,
    }
  ]

});

// 输出router
export default router;
  