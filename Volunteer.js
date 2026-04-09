module.exports = (sequelize, DataTypes) => {
  const Volunteer = sequelize.define('Volunteer', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hoursCommitted: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });

  Volunteer.associate = (models) => {
    Volunteer.belongsTo(models.User, {
      foreignKey: 'userId'
    });

    Volunteer.belongsTo(models.Charity, {
      foreignKey: 'charityId'
    });
  };

  return Volunteer;
};
