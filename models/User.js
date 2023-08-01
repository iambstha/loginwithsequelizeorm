import { DataTypes } from "sequelize"
import { sequelize } from "@/db/config"

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
        allowNull: false
    }
})



export default User