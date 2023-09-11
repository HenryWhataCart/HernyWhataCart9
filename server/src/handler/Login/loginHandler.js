// loginHandler.js
const loginController = require('../../controllers/Login/loginController');

const loginHandler = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await loginController({email, password})
    if (user) {
      res.status(200).json(user)  
    } else {
      res.status(401).json({ error: 'Invalid email or password' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = loginHandler
