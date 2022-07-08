module.exports = (sequelize, DataTypes) => {
	const LaminateWood = sequelize.define(
		"LaminateWood",
		{
			title: {
				type: DataTypes.STRING,
			},
			content: {
				type: DataTypes.TEXT,
			},
			img: {
				type: DataTypes.STRING,
			},
		},
		{
			timestamps: false,
		}
	);
	return LaminateWood;
};
