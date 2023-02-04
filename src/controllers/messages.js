const { InternalServerError } = require('../utils/error.js')
const id = () => { const key = ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'i', 'I', '1', '2', '3', '4', '5', '6', '7']; return `${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}` };

let messages = []

const GET = (req, res, next) => {
    try {
        return res.status(200).json(messages)
    } catch (error) {
        return next(new InternalServerError(500, error.message))
    }
}

const POST = (req, res, next) => {
    try {
        const message = { id: id(), time: `${new Date().getHours()}:${new Date().getMinutes()}`, ...req.body }
        messages.push(message)
        return res.status(201).json(message)
    } catch (error) {
        return next(new InternalServerError(500, error.message))
    }
}

const DELETE = (req, res, next) => {
    try {
        const message = messages.find(e => e.id === req.params.id);
        const index = messages.indexOf(message);
        messages.splice(index, 1);
        return res.status(200).json(messages);
    } catch (error) {
        return next(new InternalServerError(500, error.message))
    }
}

module.exports = { GET, POST, DELETE }