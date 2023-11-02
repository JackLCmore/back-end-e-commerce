const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    // a combinator/join table for many to many
    // id primary key
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // product id foreigh key
    product_id:{
      type: DataTypes.INTEGER,
      references:{
        model: 'product',
        key: 'id',
      },
    },
    // tag id foreign key
    tag_id:{
      type: DataTypes.INTEGER,
      references:{
        model: 'tag',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
