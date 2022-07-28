module.exports = (sequelize, DataTypes) => {
	const NewsLetters = sequelize.define(
		"NewsLetters",
		{
			email: {
				type: DataTypes.STRING,
			},
			status:{
				type: DataTypes.STRING,
				defaultValue: 0,
			}
		},
		{
			timestamps: false,
		}
	);
	return NewsLetters;
};

