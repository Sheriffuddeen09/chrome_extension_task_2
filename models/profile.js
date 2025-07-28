const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  return sequelize.define('Profile', {
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    about: DataTypes.TEXT,
    bio: DataTypes.TEXT,
    location: DataTypes.STRING,
    followerCount: DataTypes.INTEGER,
    connectionCount: DataTypes.INTEGER,
    bioLine: DataTypes.STRING,
  });
};