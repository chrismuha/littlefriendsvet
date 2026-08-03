import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/404View.vue'
import IntakeView from '@/views/IntakeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Little Friends Veterinary Services | Lyons Falls, NY',
        description: 'Little Friends Veterinary Services in Lyons Falls, New York provides personal veterinary care for cats, dogs, and exotic pets.',
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
    },
    {
      path: '/intake',
      name: 'intake',
      component: IntakeView,
      meta: {
        title: 'New Client Intake | Little Friends Veterinary Services',
        description: 'Secure new-client intake form for Little Friends Veterinary Services.',
        robots: 'noindex, nofollow',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
      meta: {
        title: 'Page Not Found | Little Friends Veterinary Services',
        description: 'The requested page could not be found.',
        robots: 'noindex, nofollow',
      },
    }
  ],
})

function setMetaContent(selector, attribute, content) {
  const element = document.head.querySelector(selector)
  if (element) element.setAttribute(attribute, content)
}

router.afterEach((to) => {
  const { title, description, robots } = to.meta
  const canonicalUrl = new URL(to.path, 'https://littlefriendsvet.com').href

  document.title = title
  setMetaContent('meta[name="description"]', 'content', description)
  setMetaContent('meta[name="robots"]', 'content', robots)
  setMetaContent('meta[name="googlebot"]', 'content', robots)
  setMetaContent('meta[property="og:title"]', 'content', title)
  setMetaContent('meta[property="og:description"]', 'content', description)
  setMetaContent('meta[property="og:url"]', 'content', canonicalUrl)
  setMetaContent('meta[name="twitter:title"]', 'content', title)
  setMetaContent('meta[name="twitter:description"]', 'content', description)

  const canonical = document.head.querySelector('link[rel="canonical"]')
  if (canonical) canonical.setAttribute('href', canonicalUrl)
})

export default router
