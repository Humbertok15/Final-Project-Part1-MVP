const sequelize = require('./db');
const UserModel = require('../models/User');
const CharityModel = require('../models/Charity');
const VolunteerModel = require('../models/Volunteer');
const { DataTypes } = require('sequelize');

const User = UserModel(sequelize, DataTypes);
const Charity = CharityModel(sequelize, DataTypes);
const Volunteer = VolunteerModel(sequelize, DataTypes);

// Run associations
User.associate({ Volunteer });
Charity.associate({ Volunteer });
Volunteer.associate({ User, Charity });

// Sync database
sequelize.sync({ force: true })
  .then(() => {
    console.log('Database & tables created!');
    process.exit();
  })
  .catch(err => console.error(err));
