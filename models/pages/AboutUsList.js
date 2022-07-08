module.exports = (sequelize, DataTypes) => {
	const AboutUsList = sequelize.define(
		"AboutUsList",
		{
			item: {
				type: DataTypes.STRING,
			},
		},
		{
			timestamps: false,
		}
	);
	return AboutUsList;
};
