import { Model, DataTypes } from 'sequelize';
import User from './user.model.js';
import sequelize from './sequelize.js';

class State extends Model { }

export function initState(){
    State.init(
        {
            id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            country_id: {
                type: DataTypes.BIGINT,
                references: {
                    model: 'countries',
                    key: 'id'
                },
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            },
            name : {
                type: DataTypes.STRING,
                allowNull : false,
            },
            code : {
                type: DataTypes.STRING,
                allowNull : false,
            },
            created_by: {
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
                allowNull: false,
                defaultValue: sequelize.NOW
            }
        },
        {
            sequelize,
            modelName: 'State',
            timestamps: false
        }
    );
}

export default State;