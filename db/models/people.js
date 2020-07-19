'use strict';
module.exports = (sequelize, DataTypes) => {
  const people = sequelize.define('peoples', {
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
    people.belongsTo(models.modules,{
      foreignKey: 'moduleId',
      as: 'module',
      cascade: true,
    });
    people.belongsTo(models.positions,{
      foreignKey: 'positionId',
      as: 'position',
      cascade: true,
    });
    people.belongsTo(models.electorals,{
      foreignKey: 'electoralId',
      as: 'electoral',
      cascade: true,
    });
    people.belongsTo(models.user,{
      foreignKey: 'userId',
      as: 'user',
      cascade: true,
    });
    people.belongsToMany(models.dues,{
      through: 'PeopleDues',
      as: 'dues',
      foreignKey: 'peopleId',
      otherKey: 'duesId'
    })
  };
  return people;
};