const { Item } = require('../models');

const getItems = async (req, res) => {
    try {
        const items = await Item.find({});
        console.log('Items retrieved successfully.');
        res.status(200).json({ success: true, items });
    } catch (e) {
        console.error('Error retrieving items:', e);
        res.status(500).json({ success: false, error: 'Server error' });
    }
};

const postItem = async (req, res) => {
    try {
        const newItem = new Item(req.body);
        await newItem.save();
        console.log('Item created successfully:', newItem);
        res.status(201).json({ success: true, message: 'Item created successfully', item: newItem });
    } catch (e) {
        console.error('Error creating item:', e);
        res.status(500).json({ success: false, error: 'Server error' })
    }
};

module.exports = {
    getItems,
    postItem
}