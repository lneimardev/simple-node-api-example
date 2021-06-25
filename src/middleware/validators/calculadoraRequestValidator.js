const Joi = require('joi');

module.exports = Joi.object({
    numero1: Joi.number()
        .required()
        .messages({
            'any.required': '"numero1" é um campo obrigatório.',
        }),
    numero2: Joi.number()
        .required()
        .min(0.01)
        //.max(10)
        .messages({
            'number.min': `"numero2" não pode ser menor que zero.`,
            //'number.max': `"lojaid" should have a maximum length of 10`,
            'any.required': '"lojaid" is a required field',
        }),
    operacao: Joi.string()
        .trim()
        .required()
        .messages({
            'any.required': '"operacao" não pode ser vazio.',
        })
});