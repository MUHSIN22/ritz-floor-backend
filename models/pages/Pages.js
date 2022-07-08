module.exports = (sequelize, DataTypes) => {
	const Pages = sequelize.define(
		"pages",
		{
			name: {
				type: DataTypes.STRING,
			},
		},
		{
			timestamps: false,
		}
	);
	return Pages;
};
