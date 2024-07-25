import { Model, DataTypes } from 'sequelize';
import User from './user.model.js';
import sequelize from './sequelize.js';

class Country extends Model { }

export function initCountry(){
    Country.init(
        {
            id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
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
            modelName: 'Country',
            timestamps: false,
            defaultScope: {
                include: [
                    { model: User, as: 'user' }
                ]
            }
        }
    );
}

export default Country;