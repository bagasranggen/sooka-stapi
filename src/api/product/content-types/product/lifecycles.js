module.exports = {
  async beforeUpdate(event) {
    const uri = [];
    const {data:{slug, category:{connect:[category]}}} = event.params;

    if(category?.id) {
      const resCategory = await strapi.entityService.findOne("api::category.category",  category.id)

      if(resCategory?.slug) {
        uri.push(resCategory.slug)
      }
    }

    if (slug) uri.push(slug);

    if (uri.length > 0) {
      event.params.data.uri = uri.join('/')
    }
  },
};
