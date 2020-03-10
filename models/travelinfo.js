// Create Travel Info model
module.exports = function(sequelize, DataTypes) {
  var Traveler = sequelize.define("Traveler", {
//info from user/traveler of name and dates of 'staycation'
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isName: true
      }
    },
    // The password cannot be null
    dates: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return User;
};
