module.exports = (sequelize, DataTypes) => {
	const ClientReview = sequelize.define(
		"ClientReview",
		{
			name: {
				type: DataTypes.STRING,
			},
			img: {
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
	return ClientReview;
};
