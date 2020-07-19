'use strict';
module.exports = (sequelize, DataTypes) => {
  const dues = sequelize.define('dues', {
    peopleId: DataTypes.INTEGER,
    positionId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    purpose: DataTypes.TEXT,
    type: DataTypes.STRING,
    from: DataTypes.DATE,
    to: DataTypes.DATE,
    userId: DataTypes.INTEGER
  }, {});
  dues.associate = function(models) {
    // associations can be defined here
    dues.belongsToMany(models.peoples,{
      through: 'PeopleDues',
      as: 'people',
      foreignKey: 'duesId',
      otherKey: 'peopleId'
    })
  };
  return dues;
};

