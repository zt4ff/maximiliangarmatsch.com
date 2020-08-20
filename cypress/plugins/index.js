module.exports = (on, config) => {
    require('cypress-react-unit-test/plugins/react-scripts')(on, config);

    on('task', require('@cypress/code-coverage/task')(on, config));
    return config;
};
