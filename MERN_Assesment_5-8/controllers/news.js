import { News } from "../Model/News.js";

export const getNews = async (req, res) => {
    try {
        let news = await News.find()
        res.json({ message: 'Your Request Has Been Succesfully', news, success: true })
    } catch (error) {
        res.json({ message: 'Internal Server Error', success: false })
    }
}

export const addNews = async (req, res) => {
    const { headline, description, category, img } = req.body;
    try {
        let news = await News.create({ headline, description, category, img });
        res.json({
            message: 'Your News Has Been Added Succesfuly',
            news,
            success: true
        })
    } catch (error) {
        res.json({ message: 'Internal Server Error', success: false })
    }
}

export const getNewsById = async (req, res) => {
    const id = req.params.id
    try {
        let news = await News.findById({ _id: id });
        res.json({
            message: 'Your News is There...',
            news,
            success: true
        })
    } catch (error) {
        res.json({ message: 'Internal Server Error', success: false })
    }
}

export const deleteNewsById = async (req, res) => {
    const id = req.params.id;
    try {
        let news = await News.findByIdAndDelete(id);
        if (!news) return res.json({ message: 'Invalid Id', success: false })
        res.json({
            message: 'Your News Has Been Deleted',
            news,
            success: true
        })
    } catch (error) {
        res.json({ message: 'Internal Server Error', success: false })
    }
}

export const updateNewsById = async (req, res) => {
    const id = req.params.id;
    try {
        let news = await News.findByIdAndUpdate(id, req.body, { new: true });
        if (!news) return res.json({ message: 'Invalid Id', success: false })
        res.json({
            message: 'Your News Has Been Updated',
            news,
            success: true
        })
    } catch (error) {
        res.json({ message: 'Internal Server Error', success: false })
    }
}


export const newsByCategory = async (req, res) => {
    const { category } = req.body;
    try {
        let news = await News.find({ category: category });
        if (!news) return res.json({ message: 'Invalid Category', success: false })
        res.json({
            message: 'Your News is There...',
            news,
            success: true
        })
    } catch (error) {
        res.json({ message: 'Internal Server Error', success: false })
    }
}
