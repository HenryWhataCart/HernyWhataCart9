
const { Router } = require('express');
const SuperUserGet = require('../../handler/SuperUser/getSuperUser')


const router = Router();

router.get('/', SuperUserGet);

module.exports = router;
