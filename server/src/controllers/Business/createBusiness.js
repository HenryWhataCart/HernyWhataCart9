const {Business} = require('../../db')

const createBusiness = async(name,SuperuserId) =>{
    try {
        const [newBusiness,created] = await Business.findOrCreate({
            where:{
                name,
                SuperuserId
            }
        })
        console.log(created)
        await newBusiness.setSuperuser(SuperuserId)
        await newBusiness.save()
        return newBusiness
    } catch (error) {
        console.log('An error occurred while creating the business',error)
        throw error
    }
}

module.exports = createBusiness