
'use strict';
module.exports = (sequelize, DataTypes) => {
  const position = sequelize.define('position', {
    name: DataTypes.STRING
  }, {});
  position.associate = function(models) {
    // associations can be defined here
    position.hasMany(models.user,{
      foreignKey: 'positionlId',
      as: 'position',
      cascade: true,
    })
  };
  return position;
};