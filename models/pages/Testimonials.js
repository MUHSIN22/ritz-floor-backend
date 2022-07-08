module.exports = (sequelize, DataTypes) => {
	const Testimonials = sequelize.define(
		"Testimonials",
		{
			content: {
				type: DataTypes.STRING,
			},
			role: {
				type: DataTypes.TEXT,
			},
			name: {
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
	return Testimonials;
};
