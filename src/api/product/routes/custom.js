module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/products/:slug',
      handler: 'product.findOne',
    }
  ]
}
