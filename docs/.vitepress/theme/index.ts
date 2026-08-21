import DefaultTheme from 'vitepress/theme'
import ContributorsPanel from './components/ContributorsPanel.vue'
import FancyCard from './components/FancyCard.vue'
import CodeTabs from './components/CodeTabs.vue'
import ReleaseCard from './components/ReleaseCard.vue'
import EventCatalog from './components/EventCatalog.vue'
import CharacterShowcase from './components/CharacterShowcase.vue'
import HomeModules from './components/HomeModules.vue'
import './styles/custom.css'
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ContributorsPanel', ContributorsPanel)
    app.component('FancyCard', FancyCard)
    app.component('CodeTabs', CodeTabs)
    app.component('ReleaseCard', ReleaseCard)
    app.component('EventCatalog', EventCatalog)
    app.component('CharacterShowcase', CharacterShowcase)
    app.component('HomeModules', HomeModules)
  },
} satisfies Theme
