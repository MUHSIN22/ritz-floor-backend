module.exports = (sequelize, DataTypes) => {
	const TextTestimonials = sequelize.define(
		"TextTestimonials",
		{
			message: {
				type: DataTypes.TEXT,
			},
			img: {
				type: DataTypes.STRING,
			},
			video: {
				type: DataTypes.STRING,
			},
		},
		{
			timestamps: false,
		}
	);
	return TextTestimonials;
};
