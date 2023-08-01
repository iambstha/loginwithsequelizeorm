import { DataTypes } from "sequelize"
import { sequelize } from "@/db/config"
const bcrypt = require('bcrypt')

const User = sequelize.define('user',{
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hashedPassword: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value){
            const salt = bcrypt.genSaltSync(12)
            const hash = bcrypt.hashSync(value, salt)
            this.setDataValue('hashedPassword',hash)
        }
    }
})



export default User