const controller = require('../controllers/messages.js')
const router = require('express').Router()

router.get('/', controller.GET)
router.post('/', controller.POST)
router.delete('/:id', controller.DELETE)

module.exports = router