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


const Room = sequelize.define('Room', {
  number: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  availability: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  capacity:{
    type: DataTypes.STRING,
    allowNull: false
  }
});

sequelize.sync().then(() => {
  console.log('Rooms table has been created.');
});

module.exports = Room;
