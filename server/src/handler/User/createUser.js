const createUser = require("../../controllers/User/postUser");

const userPost = async (req, res) => {
  const { name, email, password, phone, privilege, rolIdRow, businessId } =
    req.body;
  // console.log({name,email,password, phone,privilege, rolIdRow});
  try {
    if (!name || !email || !password || !phone)
      return res.status(404).json({ error: "required data not found" });
    const newUser = await createUser(
      name,
      email,
      password,
      phone,
      privilege,
      rolIdRow,
      businessId
    );
    if (!newUser)
      return res
        .status(404)
        .json({ error: "an error occurred while creating user" });
    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = userPost;
