const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  }
);


const Users = sequelize.define('services', {
  serviceName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
  
});

sequelize.sync({ force: true }).then(() => {
  console.log('Rooms table has been (re)created.');
});

module.exports = Users;
