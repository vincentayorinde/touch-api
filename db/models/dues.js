'use strict';
module.exports = (sequelize, DataTypes) => {
  const dues = sequelize.define('dues', {
    peopleId: DataTypes.INTEGER,
    positionId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    purpose: DataTypes.TEXT,
    type: DataTypes.STRING,
    no_of_days: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  dues.associate = function(models) {
    // associations can be defined here
    dues.belongsTo(models.people,{
      foreignKey: 'peopleId',
      as: 'people',
      cascade: true,
    })
  };
  return dues;
};

