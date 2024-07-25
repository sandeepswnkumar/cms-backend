import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from './sequelize.js';
import bcrypt from 'bcrypt';

class Token extends Model {}

export function initToken(){
    Token.init(
        {
            id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            token : {
                type : DataTypes.STRING,
                allowNull : false
            },
            user_id : {
                type: DataTypes.BIGINT,
                references: {
                    model: 'users',
                    key: 'id'
                },
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            },
            created_at: {
                type: DataTypes.DATE,
                defaultValue: Sequelize.NOW,
                allowNull : false,
            },
            expire_at: {
                type: DataTypes.DATE,
                allowNull : false
            }
        },
        {
            sequelize,
            modelName: 'Token',
            timestamps: false,
        }
    );
}


export default Token;