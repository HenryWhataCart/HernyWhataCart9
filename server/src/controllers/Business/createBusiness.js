const {Business} = require('../../db')

// const createBusiness = async(name,phone,email,SuperuserId) =>{
const createBusiness = async({name,phone,email,apiKey,srcName}) =>{

        const [newBusiness,created] = await Business.findOrCreate({
            where:{
                name,
                phone,
                email,
                apiKey,
                srcName
                // SuperuserId
            }
        })

        // await newBusiness.setSuperuser(SuperuserId)
        // await newBusiness.save()
        return newBusiness
}

module.exports = createBusiness