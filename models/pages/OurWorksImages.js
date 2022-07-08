module.exports = (sequelize, DataTypes) => {
	const OurWorkImages = sequelize.define(
		"OurWorkImages",
		{
			img: {
				type: DataTypes.STRING,
			},
		},
		{
			timestamps: false,
		}
	);
	return OurWorkImages;
};
