module.exports = (sequelize, DataTypes) => {
  const Charity = sequelize.define('Charity', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    }
  });

  Charity.associate = (models) => {
    Charity.hasMany(models.Volunteer, {
      foreignKey: 'charityId'
    });
  };

  return Charity;
};
