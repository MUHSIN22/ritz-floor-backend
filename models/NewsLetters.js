module.exports = (sequelize, DataTypes) => {
	const NewsLetters = sequelize.define(
		"NewsLetters",
		{
			email: {
				type: DataTypes.STRING,
			},
		},
		{
			timestamps: false,
		}
	);
	return NewsLetters;
};
