var getSecret = require('./get-secret.js');

function getGreatSecret() {

    return getSecret({
        secret: 'GREAT_SECRET',
        defaultValue: '(SwarmMode)',
        formatter: function(greatSecret, greatSecretDefault) {
            return '(' + (greatSecret ? greatSecret.trim() : greatSecretDefault) + ')';
        }
    });

}

module.exports = {
  greatMessage: process.env.GREAT_MESSAGE || 'Hello world :)'
};

