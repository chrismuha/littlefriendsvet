import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import businessSchema from '../data/business.json'
import NotFoundView from '../views/404View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Little Friends on Wheels | Mobile Vet in Lyons Falls, NY',
        description: 'House-call veterinary care for cats, dogs and exotic pets around Lyons Falls, Boonville, Lowville, Brantingham and Old Forge. Visits by appointment.',
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
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
  let element = document.head.querySelector(selector)
  if (!element) {
    const [, key, value] = selector.match(/meta\[(name|property)="([^"]+)"\]/)
    element = document.createElement('meta')
    element.setAttribute(key, value)
    document.head.append(element)
  }
  element.setAttribute(attribute, content)
}

router.afterEach((to, _from, failure) => {
  if (failure) return
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

  let canonical = document.head.querySelector('link[rel="canonical"]')
  if (to.name === 'not-found') {
    canonical?.remove()
    document.head.querySelector('meta[property="og:url"]')?.remove()
  } else {
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.append(canonical)
    }
    canonical.href = canonicalUrl
  }

  document.getElementById('business-schema')?.remove()
  if (to.name === 'home') {
    const schema = document.createElement('script')
    schema.id = 'business-schema'
    schema.type = 'application/ld+json'
    schema.textContent = JSON.stringify(businessSchema)
    document.head.append(schema)
  }
})

export default router
