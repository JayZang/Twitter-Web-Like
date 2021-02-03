import store from '@/store'
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeRouter from './Home'
import LoginRouter from './login'
import RegistRouter from './regist'
import SearchRouter from './Search'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    ...LoginRouter,
    ...RegistRouter,
    ...SearchRouter,
    ...HomeRouter
  ]
})

// 全Office routing guard settings
router.beforeEach( async (to, from, next) => {
  // Is the identity confirmed
  if (!store.getters.isAuthChecked ||
      (store.getters.isLogin && !store.getters.isInMaxDurationTime())){
    await store.dispatch('checkAuth')
    console.log('Auth Updated')
  }

  // Pages that the logged-in user cannot visit
  if(to.meta.requireNotLogin && store.getters.isLogin)
    return next('/')

  // Default web page title
  if(to.meta.title)
    document.title = to.meta.title

  next()
})

export default router
