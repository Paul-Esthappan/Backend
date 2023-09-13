const { METHODS } = require("http");

const datas = {
    name: "paul",
    domain:"MERN full stack",
    methods: function () {
        console.log(this.name);
    }
}

module.exports = datas