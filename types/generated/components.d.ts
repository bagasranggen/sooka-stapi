import type { Schema, Struct } from '@strapi/strapi';

export interface PricesPricesList extends Struct.ComponentSchema {
  collectionName: 'components_prices_prices_lists';
  info: {
    description: '';
    displayName: 'Base Price';
  };
  attributes: {
    notes: Schema.Attribute.String & Schema.Attribute.Required;
    price: Schema.Attribute.BigInteger & Schema.Attribute.Required;
    salePrice: Schema.Attribute.BigInteger;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'prices.prices-list': PricesPricesList;
    }
  }
}
