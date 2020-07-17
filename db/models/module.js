
'use strict';
module.exports = (sequelize, DataTypes) => {
  const module = sequelize.define('module', {
    name: DataTypes.STRING
  }, {});
  module.associate = function(models) {
    // associations can be defined here
    module.hasMany(models.user,{
      foreignKey: 'moduleId',
      as: 'module',
      cascade: true,
    })
  };
  return module;
};