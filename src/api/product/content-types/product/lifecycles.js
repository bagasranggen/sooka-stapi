const getProductUri = async ({ slug, category }) => {
  const uri = [];

  if (category?.id) {
    const res = await strapi.entityService.findOne('api::category.category', category?.id);

    if (res?.slug) {
      uri.push(res.slug);
    }
  }

  if (slug) uri.push(slug);

  return uri.length > 1 ? uri.join('/') : undefined;
};

module.exports = {
  async beforeCreate(event) {
    const {
      data: { slug, category },
    } = event.params;

    const uri = await getProductUri({
      slug,
      category: category?.connect?.[0],
    });

    if (uri) {
      event.params.data.uri = uri;
    }
  },

  async beforeUpdate(event) {
    const {
      data: {
        slug,
        category: {
          connect: [category],
        },
      },
    } = event.params;

    const uri = await getProductUri({ slug, category });

    if (uri) {
      event.params.data.uri = uri;
    }
  },
};
