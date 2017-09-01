import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/view/home'
import HomeIndex from '@/view/home/children/index'
import HomeJujia from '@/view/home/children/Jujia'

import Classify from '@/view/classify'
import classContent from '@/view/classify/children'
import classList from '@/view/classify/component/classList'

import shopIndex from '@/view/shop'

import loginIndex from '@/view/login'
import Zoom from '@/view/zoom'

import shopCart from '@/view/shopCart'

import search from '@/view/search'

import computed from '@/view/computed'

import newPeople from '@/view/newPeople'

import indent from '@/view/indent'
import entAll from '@/view/indent/component/entAll'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/Home/homeChild2'
    },
    {
      path: '/Home',
      name: 'Home',
      redirect: '/Home/homeChild2',
      component: Home,
      children: [
        {
          path: 'homeChild2',
          component: HomeIndex
        },
        {
          path: 'homeChild3',
          component: HomeJujia
        },
        {
          path: 'homeChild13',
          component: HomeJujia
        },
        {
          path: 'homeChild12',
          component: HomeJujia
        },
        {
          path: 'homeChild8',
          component: HomeJujia
        },
        {
          path: 'homeChild9',
          component: HomeJujia
        },
        {
          path: 'homeChild4',
          component: HomeJujia
        },
        {
          path: 'homeChild11',
          component: HomeJujia
        },
        {
          path: 'homeChild14',
          component: HomeJujia
        },
        {
          path: 'homeChild7',
          component: HomeJujia
        },
        {
          path: 'homeChild5',
          component: HomeJujia
        }
      ]
    },
    {
      path: '/Classify',
      name: 'Classify',
      component: Classify,
      redirect: '/Classify/classContent',
      children: [
        {
          path: 'classContent',
          component: classContent
        },
        {
          path: 'ClassList',
          component: classList
        }
      ]
    },
    {
      path: '/shopIndex',
      name: 'shopIndex',
      component: shopIndex,
      beforeEnter : (to, from, next) => {
        var user = window.localStorage["userMsg"];
        var list = window.localStorage["list"];
      //  console.log(user,list)
          if(user){
            if(list!='[]'){
           // console.log(555554)
              next({path: '/computed'}); 
            }else{
              next();  
            }
          }else{ 
              next({ path: '/loginIndex', query:{"to":to.name} });
          }
      }
    },
    {
      path: '/loginIndex',
      name: 'loginIndex',
      component: loginIndex,
      beforeEnter: (to,from,next) => {
        var user = window.localStorage['userMsg'];
        if(user){
          next({path:'/Zoom'})
        }else{
          next()
        }
      }
    },
    {
      path: '/Zoom',
      name: ' zoom',
      component: Zoom
    },
    {
      path: '/shopCart',
      name:'shopCart',
      component: shopCart
    },
    {
      path:'/search',
      name:'search',
      component: search
    },
    {
      path: '/computed',
      name: 'computed',
      component: computed
    },
    {
      path: '/activity0',
      name: 'newPeople',
      component:newPeople
    },
    {
      path:'/indent',
      name:'indent',
      component: indent,
      redirect:'/indent/entAll',
      children:[
        {
          path:'entAll',
          component: entAll
        },
        {
          path:'await',
          component: entAll
        },
        {
          path:'dueout',
          component: entAll
        },
        {
          path:'duein',
          component: entAll
        },
        {
          path:'refund',
          component: entAll
        }
      ]
    }
  ]
})
