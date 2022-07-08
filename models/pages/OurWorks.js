module.exports = (sequelize, DataTypes) => {
	const OurWorks = sequelize.define(
		"OurWorks",
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
	return OurWorks;
};
