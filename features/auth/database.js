const Database = require("@replit/database");

const getDatabaseValue = async function (key) {
    const replit = new Database();
    const getValue = await replit.get(key);
    console.log('-------------');
    console.log(`Database - Method[GET] Key[${key}] value[${getValue}]`);
    console.log('-------------');

    return getValue
}

const setDatabaseValue = async function (key, value) {
    const replit = new Database();
    const setValue = await replit.set(key, value);
    console.log('-------------');
    console.log(`Database - Method[SET] Key[${key}] value[${value}]`);
    console.log('-------------');

    return setValue
}

module.exports = { getDatabaseValue, setDatabaseValue }