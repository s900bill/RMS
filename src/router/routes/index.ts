import type { RouteRecordRaw } from 'vue-router'

/**
 * 路由配置
 * @description 所有路由都在这里集中管理
 */
const routes: RouteRecordRaw[] = [
  /**
   * 首页
   */
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Login-Page.vue'),
    meta: {
      title: 'Login',
    },
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home-Page.vue'),
    meta: {
      title: 'Home',
    },
  },

  {
    path: '/foo',
    name: 'foo',
    component: () =>
      import(/* webpackChunkName: "foo" */ '@cp/TransferStation.vue'),
    meta: {
      title: 'Foo',
    },
    redirect: {
      name: 'bar',
    },
    children: [
      {
        path: 'bar',
        name: 'bar',
        component: () =>
          import(/* webpackChunkName: "bar" */ '@views/foo/bar.vue'),
        meta: {
          title: 'Bar',
        },
      },
      {
        path: 'test',
        name: 'test',
        component: () =>
          import(/* webpackChunkName: "bar" */ '@views/foo/test.vue'),
        meta: {
          title: 'test',
        },
      },
      {
        path: 'father',
        name: 'father',
        component: () =>
          import(/* webpackChunkName: "bar" */ '@views/foo/father.vue'),
        meta: {
          title: 'father',
        },
      },
    ],
  },
]

export default routes
