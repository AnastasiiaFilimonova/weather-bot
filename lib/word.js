const Morpher = require('morpher-ru');
const morph = new Morpher();
morph.declension('книга').then(result => console.log(result), error => console.log(error))
