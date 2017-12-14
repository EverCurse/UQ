import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Profile from '@/components/profile'
import Chat from '@/components/chat'
import Video from '@/components/video'


Vue.use(Router)
let router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/profile',
          component: Profile
        },
        {
          path: '/chat',
          component: Chat
        },
        {
          path: '/hello',
          component: Video
        }
      ]
    }
  ]
});
export default router
