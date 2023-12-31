const Sequelize = require('sequelize')

const username = 'postgres';
const password = encodeURIComponent('bishal@123');
const host = 'localhost';
const port = 5432;
const databaseName = 'dbforlogin';

const sequelize = new Sequelize(
    `postgres://${username}:${password}@${host}:${port}/${databaseName}`,
    {
        dialectModule: require('pg')
    }
)

const tableSync = async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log('Sequelize synchronized successfully.');
    } catch (error) {
        console.error('Sequelize synchronization error:', error);
    }
}

const testConnection = () => {
    try {
        sequelize.authenticate()
            .then(() => {
                console.log("Connection is successful.")
            })
            .catch(err => {
                console.log("Connection is not successful.")
            })
    } catch (err) {
        console.log(err)
    }
}

testConnection()
tableSync()


module.exports = { sequelize }