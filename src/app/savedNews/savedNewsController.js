const { SavedNews } = require("./savedNews.model");

module.exports.createSavedNews = async (req,res) =>{
    const {_id} = req.user.user;
    const {newsId} = req.body;
    const data = {
        savedBy: _id,
        savedNews: newsId
    }
    const result = await SavedNews.create(data)
    res.status(201).json({
        success: true,
        data: result
    })
}
module.exports.getSavedNewsByUser = async (req,res) =>{
    const {_id} = req.user.user;
    const result = await SavedNews.find({savedBy: _id}).populate("savedNews")
    res.status(200).json(result)
}