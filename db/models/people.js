'use strict';
module.exports = (sequelize, DataTypes) => {
  const people = sequelize.define('people', {
    voters_id: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    other_name: DataTypes.STRING,
    polling_station: DataTypes.STRING,
    moduleId: DataTypes.STRING,
    positionId: DataTypes.STRING,
    electoralId: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  people.associate = function(models) {
    // associations can be defined here
    people.belongsTo(models.module,{
      foreignKey: 'moduleId',
      as: 'module',
      cascade: true,
    });
    people.belongsTo(models.position,{
      foreignKey: 'positionId',
      as: 'posistion',
      cascade: true,
    });
    people.belongsTo(models.electoral,{
      foreignKey: 'electoralId',
      as: 'electoral',
      cascade: true,
    });
    people.belongsTo(models.user,{
      foreignKey: 'userId',
      as: 'user',
      cascade: true,
    });
    people.hasMany(models.dues,{
      foreignKey: 'peopleId',
      as: 'people',
      cascade: true,
    })
  };
  return people;
};