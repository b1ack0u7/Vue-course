import { createRouter, createWebHashHistory } from 'vue-router'
import isAuthenticatedGuard from './auth-guard'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },

  {
    path: '/pokemon',
    name: 'pokemon',
    component: () => import('@/modules/pokemon/layouts/PokemonLayout'),
    children: [
      {
        path: 'home',
        name: 'pokemon-home',
        component: () => import('@/modules/pokemon/pages/ListPage') 
      },
      {
        path: 'about',
        name: 'pokemon-about',
        component: () => import('@/modules/pokemon/pages/AboutPage') 
      },
      {
        path: 'pokemonid/:id', 
        name: 'pokemon-id',
        component: () => import('@/modules/pokemon/pages/PokemonPage'),
        props: (route) => {
          const id = Number(route.params.id)
          return isNaN(id) ? { id: 1 } : { id: id }
        }
      },
      {
        path: '',
        redirect: { name: 'pokemon-home' }
      }
    ]
  },
  {
    path: '/dbz',
    name: 'dbz',
    beforeEnter: [ isAuthenticatedGuard ],
    component: () => import('@/modules/dbz/layout/DBLayout'),
    children: [
      {
        path: 'characters',
        name: 'dbz-characters',
        component: () => import('@/modules/dbz/pages/Characters') 
      },
      {
        path: 'about',
        name: 'dbz-about',
        component: () => import('@/modules/dbz/pages/About') 
      },
      {
        path: '',
        redirect: { name: 'dbz-characters' }
      }
    ]
  },
  { 
    path: '/:pathMatch(.*)*', 
    component: () => import('@/modules/shared/pages/NotFoundPage') 
    // redirect: '/home'
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

//Guard global - sincrono
// router.beforeEach((to, from, next) => {
//   // console.log({to, from, next})
//   const random = Math.random() * 100
//   console.log(random)
//   if(random > 50) {
//     console.log('Auntenticado')
//     next()
//   } else {
//     console.log('Bloqueado')
//     next({ name: 'pokemon-home' })
//   }
// })

//Guard global - asincrono
// const canAccess = () => {
//   return new Promise((resolve, reject) => {
//     const random = Math.random() * 100
//     console.log(random)
//     if(random > 50) {
//       console.log('Auntenticado - canAccess')
//       resolve(true)
//     } else {
//       console.log('Bloqueado - canAccess')
//       reject(false)
//     }
//   })
// }

// router.beforeEach(async(to, from, next) => {
//   await canAccess()
//   .then(() => next())
//   .catch(() => next({ name: 'pokemon-home' }))
// })

export default router