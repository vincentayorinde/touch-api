
'use strict';
module.exports = (sequelize, DataTypes) => {
  const _module = sequelize.define('modules', {
    name: DataTypes.STRING
  }, {});
  _module.associate = function(models) {
    // associations can be defined here
    _module.hasMany(models.peoples,{
      foreignKey: 'moduleId',
      as: 'module',
      cascade: true,
    })
  };
  return _module;
};