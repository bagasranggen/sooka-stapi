'use strict';

/**
 * category controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::category.category', ({strapi}) => ({
  async findOne(ctx) {
    const {id} = ctx.params;

    const entity = await strapi.db.query('api::category.category').findOne({
      where: {slug:id}
    })

    const sanitizedEntity = await this.sanitizeOutput(entity);

    return this.transformResponse(sanitizedEntity)
  }
}));
