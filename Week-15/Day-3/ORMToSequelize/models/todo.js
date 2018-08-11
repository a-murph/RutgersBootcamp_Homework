module.exports = function (sequelize, DataTypes) {
	var ToDo = sequelize.define("ToDo", {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true
		},
		text: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 140]
			}
		},
		complete: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
	});
	
	return ToDo;
}