const RolDelete = require('../../controllers/Rol/deleteRol')

const RolDeleted = async(req,res) =>{
    const {id} = req.params
    try{
        if(!id) return res.status(404).json({error:'id invalid'})
        await RolDelete(id)
        return res.status(200).json({message:'Rol removed successfully'})
    }catch(error){
        return res.status(500).json({error:'id not found',error})
    }
}

module.exports = RolDeleted