module.exports = (sequelize, DataTypes) => {
	const KnowledgeSeriesImages = sequelize.define(
		"knowledgeSeriesImages",

		{
			img: {
				type: DataTypes.TEXT,
			},
		},
		{
			timestamps: false,
		}
	);
	return KnowledgeSeriesImages;
};
