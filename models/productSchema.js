module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    "id": {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    "first_name": {type: DataTypes.STRING(50), field: "first_name"},
    "last_name": {type: DataTypes.STRING(50), field: "last_name"},
  },{
    tableName: 'api_student',
    timestamps: false
  })
  return Student;
}
