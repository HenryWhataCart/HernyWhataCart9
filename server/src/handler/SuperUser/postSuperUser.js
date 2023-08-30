const controllerSuperUser = require('../../controllers/SuperUser/controllerSuperUser')

const superUserPost = async(req,res) =>{
    const{name,email,password} = req.body
    try {
        if(!name || !email || !password) return res.status(404).json({error: 'required data not found'})
    } catch (error) {
        
    }
}