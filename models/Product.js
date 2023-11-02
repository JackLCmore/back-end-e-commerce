// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns -> names need to be exact!
    // id int not null primary key auto increment
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // product name string not null
    product_name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    // price not null decimal (constraint? validate?)
    price:{
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate:{
        isDecimal: true,
      },
    },
    // category id foreign key
    category_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
    },
    // stock not null int default value 10 (validate numeric)
    stock:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate:{
        isNumeric: true,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
