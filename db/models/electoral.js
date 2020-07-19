'use strict';
module.exports = (sequelize, DataTypes) => {
  const electoral = sequelize.define('electorals', {
    name: DataTypes.STRING
  }, {});
  electoral.associate = function(models) {
    // associations can be defined here
    electoral.hasMany(models.peoples,{
      foreignKey: 'electoralId',
      as: 'electoral',
      cascade: true,
    })
  };
  return electoral;
};