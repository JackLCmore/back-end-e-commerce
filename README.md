# E-Commerce Back-End Server/Database Setup

## Table of Contents

* [License](#license)
* [Description](#description)
* [Installation and Usage](#installation-and-usage)
* [Learning Points](#learning-points)
* [Technologies Used](#technologies-used)
* [Contacts](#contacts)

## License

ODbl [![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)
  This Back End E-Commerce work is made available under the Open Database License: http://opendatacommons.org/licenses/odbl/1.0/. Any rights in individual contents of the database are licensed under the Database Contents License: http://opendatacommons.org/licenses/dbcl/1.0/

## Description

The purpose of this project was to successfully apply my knowledge to the implementation of SQL data models, SQL table relationships and express routing.

This back end application allows for persistant storage of inventory management and can link categories, products and tags together to then be viewed at another point in time.

## Installation and Usage

[Click Here For A Demonstration Video](https://youtu.be/EHDModmcA2k) 

        To install this application:
* Click on the fork drop down in the upper right hand of this GitHub repository
* Copy the SSH link and clone it down to your device  
* Install the packages necessary to run the application
* Run the associated schema and seeds
* Run npm start in a CLI
* Start managing your online inventory!
---

        There are several tools available in the application including:

* The ability to view all categories, products and tags within your database
* The ability to view any single category, product or tag within your database
* The ability to create new categories, products and tags within your database
* The ability to update old categories, products and tags within your database
* The ability to delete any category, product or tag within your database

## Learning Points

Here we have a many to many relationship that ties both of the Tag and Product models together through the product tag table.

```js
Product.belongsToMany(Tag, {
  through: 'producttag',
  foreignKey: 'product_id',
});

Tag.belongsToMany(Product, {
  through: 'producttag',
  foreignKey: 'tag_id',
});
```
y

Here we are deleting a specific product based on the id that the user has chosen to delete.

```js
router.delete('/:id', async (req, res) => {
  try {
    const productData = await Product.destroy({
      where:{
        id: req.params.id,
      },
    });

    if(!productData){
      res.status(404).json({message: 'No product found with that ID'});
      return;
    }

    res.status(200).json(productData);
  }catch(err){
    res.status(500).json(err);
  }
});
```

## Technologies Used

|Technology|Link|
|----|----|
|Git|https://git-scm.com/|
|Javascript|https://developer.mozilla.org/en-US/docs/Web/JavaScript|
|SQL|https://www.w3schools.com/sql/sql_intro.asp|
|Node|https://nodejs.org/en|
|Insomnia|https://docs.insomnia.rest|

## Contacts

    Please feel free to contact me at any of the following for concerns or inquiries:

[GitHub](https://github.com/JackLCmore)

[Email](jack.lcmore@gmail.com)

[LinkedIn](https://www.linkedin.com/in/jack-seymour-b0b2b0292/)