const { User, Business, Superuser } = require('../../db')

const loginController = async ({email, password}) => {
  let user = await User.findOne({
    where: { email, password },
    include: Business
  })

  if (user) {
    if (user.privilege === "Admin" || user.privilege === "Member") {
      if (user.Business) {
        user = {
          id: user.id,
          name: user.name,
          privilege: user.privilege,
          businessId: user.Business.id,
          businessName: user.Business.name
        }
      }
      return user
    }
  } else {
      let superUser = await Superuser.findOne({
        where: { email, password}
      })
  if (superUser) {
    superUser = {
      id: superUser.id,
      name: superUser.name,
      privilege: superUser.privilege,
    }
    return superUser
  }
  }
}

module.exports = loginController