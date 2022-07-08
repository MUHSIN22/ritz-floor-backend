module.exports = (sequelize, DataTypes) => {
	const VideoTestimonials = sequelize.define(
		"VideoTestimonials",
		{
			url: {
				type: DataTypes.TEXT,
			},
		},
		{
			timestamps: false,
		}
	);
	return VideoTestimonials;
};
