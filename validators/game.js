const { check } = require('express-validator');

const createGame = [
    check('scenario')
        .not().isEmpty()
        .isInt(),
    check('players')
        .isArray({min:5, max:7})

];

const createIAE = [

];

module.exports = {
    createGame,
    createIAE
};