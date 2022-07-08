module.exports = (sequelize, DataTypes) => {
	const NewsLetters = sequelize.define(
		"NewsLetters",
		{
			content: {
				type: DataTypes.TEXT,
			},
			email: {
				type: DataTypes.STRING,
			},
			img: {
				type: DataTypes.STRING,
			},
		},
		{
			timestamps: false,
		}
	);
	return NewsLetters;
};
