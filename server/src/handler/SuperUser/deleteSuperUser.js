const SuperuserDelete = require('../../controllers/SuperUser/DeleteSuperUser')

const SuperUserDeleted = async(req,res) =>{
    const {id} = req.params
    try{
        if(!id) return res.status(404).json({error:'id invalid'})
        await SuperuserDelete(id)
        return res.status(200).json({message:'Super User removed successfully'})
    }catch(error){
        return res.status(500).json({error:'id not found',error})
    }
}

module.exports = SuperUserDeleted