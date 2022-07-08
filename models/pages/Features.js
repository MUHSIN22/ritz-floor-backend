module.exports = (sequelize, DataTypes) => {
	const Features = sequelize.define(
		"Features",
		{
			title: {
				type: DataTypes.STRING,
			},
			content: {
				type: DataTypes.TEXT,
			},
		},
		{
			timestamps: false,
		}
	);
	return Features;
};
