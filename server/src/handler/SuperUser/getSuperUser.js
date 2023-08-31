const {findAllSuperUsers, findSuperUserByName } = require("../../controllers/SuperUser/getSuperUser")

const getSuperUser = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const superUserByName = await findSuperUserByName(name)
      return res.status(200).json(superUserByName)
    }
    const allSuperUsers = await findAllSuperUsers()
    return res.status(200).json(allSuperUsers)
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

module.exports = getSuperUser;