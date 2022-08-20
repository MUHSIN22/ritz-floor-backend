module.exports = (sequelize, DataTypes) => {
	const WorkingTime = sequelize.define(
		"Working Time",
		{
			day: {
				type: DataTypes.STRING,
			},
			from: {
				type: DataTypes.STRING,
			},
			to: {
				type: DataTypes.STRING,
			}
		},
		{
			timestamps: false,
		}
	);
	return WorkingTime;
};