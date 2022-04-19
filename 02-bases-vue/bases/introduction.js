
const app = Vue.createApp({
  // template: `
  // <h1>Hola</h1>
  // `

  data() {
    return {
      quote: 'Im batman',
      author: 'Bruce Wane'
    }
  },
  methods: {
    changeQuote() {
      this.author = 'Axel'
      this.capitalize()
    },
    capitalize() {
      this.quote = this.quote.toUpperCase()
    }
  }
})

app.mount('#myApp')