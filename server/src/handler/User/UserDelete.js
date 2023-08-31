const userDeleted = require('../../controllers/User/deleteUser')

const handleDeleteUser = async(req,res) =>{
    const{id} = req.params
    try {
        if(!id) return res.status(404).json({error:'id not found'})
        const deleteUser = await userDeleted(id)
        if(!deleteUser) return res.status(404).json({error:'error deleting user'})
        return res.status(200).json(deleteUser)
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports = handleDeleteUser