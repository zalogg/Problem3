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


const Users = sequelize.define('users', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  phone:{
    type: DataTypes.STRING,
    allowNull: false
  }
});

sequelize.sync().then(() => {
  console.log('users table has been created.');
});

module.exports = Users;
