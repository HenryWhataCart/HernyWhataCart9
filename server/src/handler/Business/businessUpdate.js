const updatedBusiness = require('../../controllers/Business/updateBusiness');

const BusinessUpdated = async (req, res) => {
    const { id } = req.params;
    const { name, SuperuserId } = req.body;
    try {
        if (!id) return res.status(404).json({ error: 'id not found' });
        const putBusiness = await updatedBusiness(id, name, SuperuserId);
        return res.status(200).json(putBusiness);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = BusinessUpdated;
