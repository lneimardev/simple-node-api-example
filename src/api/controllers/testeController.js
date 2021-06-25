const service = require('../services/mod2');

module.exports = {

    async mod2(req, res) {
        var { numero } = req.body;

        const mod = await service.calculomod2(numero);
    
        return res.json("Yeah..." + mod);
    }, 

    async calculo1(req, res) {
        var { numero } = req.body;

        const mod = await service.calculomod2(numero);
    
        return res.json("Yeah 1..." + mod);
    },
    async calculo2(req, res) {
        var { numero } = req.body;

        const mod = await service.calculomod2(numero);
    
        return res.json("Yeah 2..." + mod);
    },

    async calculo3(req, res) {
        var { numero } = req.body;

        const mod = await service.calculomod2(numero);
    
        return res.json("Yeah 3..." + mod);
    },

    async calculo4(req, res) {
        var { numero } = req.body;
        var { numero1 } = req.body;
        var { numero2 } = req.body;
        var { numeros } = req.body;
        

        console.log(numeros);

        if (numeros) {
            for (var i = 0; i < numeros.length; i++) {
                console.log( "calculando para  numero de indice " + i + " - " + await service.calculomod2(numeros[i]));
            }
        }

        const mod = await service.calculomod2(numero);
        const mod1 = await service.calculomod2(numero1);
        const mod2 = await service.calculomod2(numero2);

        return res.json("Yeah 4..." + mod + " mod1: " + "mod2: " + mod2);
    },
}
