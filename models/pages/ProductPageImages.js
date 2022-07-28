module.exports = (sequelize, DataTypes) => {
	const ProductPageImage = sequelize.define(
		"ProductPageImage",

		{
			productId: {
				type: DataTypes.TEXT,
			},
			img: {
				type: DataTypes.TEXT,
			},
		},
		{
			timestamps: false,
		}
	);
	return ProductPageImage;
};
