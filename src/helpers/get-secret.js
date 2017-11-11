var fs = require('fs');
var path = require('path');

function loadSecret(name) {

    return new Promise(function (fullfil, reject) {
        fs.readFile(path.join('/run/secrets/', name), 'utf8', function (err,data) {
            if (err) {
                return reject(err);
            }
            return fullfil(data);
        });
    });

}

function getSecret(options) {

    var secretName = process.env[options.secret.toUpperCase() + '_NAME'] || options.secret.toUpperCase();

    return loadSecret(secretName).then(function (value) {
        return options.formatter(value, options.defaultValue);
    }).catch(function () {
        return options.defaultValue;
    });

}

module.exports = getSecret;
