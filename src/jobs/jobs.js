const service = require('../services/mod2');


class jobTeste {
    constructor() {
        setInterval( async () => {

            const n = await service.calculomod2(5);

            console.log("Set interval job >> " + n);

        }, 10000);
    }
}

module.exports = new jobTeste();