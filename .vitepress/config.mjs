import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Nature'S Remedies",
  description: "A modern blog dedicated to alternative natural medicine, offering practical, step-by-step solutions using nature's remedies to address everyday health issues. Focus on holistic, evidence-based approaches without pharmaceuticals. Planned 5 initial blog articles with random subjects: 1. 'Easing Headache Woes with Peppermint and Lavender Compresses', 2. 'Boosting Immunity with Elderberry Syrup Recipes', 3. 'Soothing Insomnia Naturally with Chamomile Tea Rituals', 4. 'Relieving Digestive Discomfort via Ginger and Probiotic Home Remedies', 5. 'Combating Seasonal Allergies with Nettle Infusions and Honey Blends'.",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'About Us', link: '/about' },
      { text: 'Contact', link: '/contact' },
      { text: 'Resources', link: '/resources' }
    ],
    socialLinks: [],
    footer: {
      message: 'Built with VitePress & AI',
      copyright: `Copyright © ${new Date().getFullYear()} Nature'S Remedies`
    }
  },
  head: [
    ['meta', { name: 'theme-color', content: '#4CAF50' }],
    ['link', { rel: 'stylesheet', href: '/styles.css' }]
  ],
  appearance: 'dark',
  lastUpdated: true
})
