'use strict';
module.exports = (sequelize, DataTypes) => {
  const electoral = sequelize.define('electoral', {
    name: DataTypes.STRING
  }, {});
  electoral.associate = function(models) {
    // associations can be defined here
    electoral.hasMany(models.user,{
      foreignKey: 'electoralId',
      as: 'electoral',
      cascade: true,
    })
  };
  return electoral;
};