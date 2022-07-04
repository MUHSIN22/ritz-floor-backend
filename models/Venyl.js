module.exports = (sequelize, DataTypes) => {
	const Venyl = sequelize.define(
		"Venyl",
		{
			img: {
				type: DataTypes.STRING(50),
			},
			title: {
				type: DataTypes.STRING(50),
			},
			subtitle: {
				type: DataTypes.STRING(50),
			},
		},
		{
			timestamps: false,
		}
	);
	return Venyl;
};
