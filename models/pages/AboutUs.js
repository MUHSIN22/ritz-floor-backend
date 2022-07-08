module.exports = (sequelize, DataTypes) => {
	const AboutUs = sequelize.define(
		"AboutUs",
		{
			title: {
				type: DataTypes.STRING,
			},
			subtitle: {
				type: DataTypes.TEXT,
			},
			content: {
				type: DataTypes.TEXT,
			},
			IMG: {
				type: DataTypes.STRING,
			},
		},
		{
			timestamps: false,
		}
	);
	return AboutUs;
};
