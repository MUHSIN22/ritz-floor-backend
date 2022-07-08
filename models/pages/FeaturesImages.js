module.exports = (sequelize, DataTypes) => {
	const FeatureImages = sequelize.define(
		"FeatureImages",
		{
			img: {
				type: DataTypes.STRING,
			},
		},
		{
			timestamps: false,
		}
	);
	return FeatureImages;
};
