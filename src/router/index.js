import { createRouter, createWebHistory } from 'vue-router'
import VModel from '../views/VModel.vue'
import VText from '../views/VText.vue'
import VFor from '../views/VFor.vue'
import VIfVShow from "../views/VIfVShow.vue"
import VBind from "../views/VBind.vue"
import VOn from "../views/VOn.vue"
import Props from "../views/Props.vue"
import Emit from "../views/Emit.vue"
import Watch from "../views/WatchandComputed.vue"
import Router from "../views/Router.vue"
import RouterProps from "../views/RouterProps.vue"
import ProvideAndInject from "../views/ProvideAndInject.vue"
import Slot from "../views/Slot.vue"
import FileReader from "../views/FileReader.vue"
import Storage from "../views/Storage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'vModel',
      component: VModel
    },
    {
      path: '/v-text',
      name: 'vText',
      component: VText
    },
    {
      path: '/v-for',
      name: 'vFor',
      component: VFor
    },
    {
      path: '/v-if-v-show',
      name: 'vIfVShow',
      component: VIfVShow 
    },
    {
      path: '/v-bind',
      name: 'vBind',
      component: VBind
    },
    {
      path: '/v-on',
      name: 'vOn',
      component: VOn
    },
    {
      path: '/props',
      name: 'props',
      component:Props
    },
    {
      path: '/emit',
      name: 'emit',
      component:Emit
    },
    {
      path: '/watch',
      name: 'watch',
      component:Watch
    },
    {
      path: '/router',
      name: 'router',
      component:Router,
      // 巢狀路由
      children: [
        {
          // http://localhost:5173/router/com-a
          path:"com-a",
          component:() => import("../components/ComA.vue")
        },
        {
          path:"com-b",
          component:() => import("../components/ComB.vue")
        },
      ]

    },{
      path: '/routerProps/:propText',
      name: 'routerProps',
      component:RouterProps,
      props:true
    },
    {
      path: '/provideAndInject',
      name: 'provideAndInject',
      component:ProvideAndInject,
    },
    {
      path: '/slot',
      name: 'slot',
      component:Slot,
    },
    {
      path: '/file-reader',
      name: 'fileReader',
      component:FileReader
    },
    {
      path: '/storage',
      name: 'storage',
      component:Storage
    },

   

  ]
})

export default router
