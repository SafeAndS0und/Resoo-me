const path = require('path');

module.exports = {
    webpack: config => {
        config.resolve.alias['@components'] = path.resolve(__dirname, './src/components');
        config.resolve.alias['@context'] = path.resolve(__dirname, './src/context');
        config.resolve.alias['@common'] = path.resolve(__dirname, './src/common');
        return config;
    }
};