module.exports = (sequelize, DataTypes) => {
	const OurWorks = sequelize.define(
		"OurWorks",
		{
			title: {
				type: DataTypes.STRING,
			},
			content: {
				type: DataTypes.TEXT,
			},
			img_1:{
				type: DataTypes.TEXT
			},
			img_2:{
				type: DataTypes.TEXT
			},
			img_3:{
				type: DataTypes.TEXT
			},
			img_4:{
				type: DataTypes.TEXT
			},
			img_5:{
				type: DataTypes.TEXT
			},
			img_6:{
				type: DataTypes.TEXT
			},
			img_7:{
				type: DataTypes.TEXT
			},
			img_8:{
				type: DataTypes.TEXT
			}
		},
		{
			timestamps: false,
		}
	);
	return OurWorks;
};

