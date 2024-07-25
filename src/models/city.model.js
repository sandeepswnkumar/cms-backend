import { Model, DataTypes } from 'sequelize';
import sequelize from './sequelize.js';



class City extends Model {

}

export function initCity() {
    City.init(
        {
            id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            state_id: {
                type: DataTypes.BIGINT,
                references: {
                    model: 'states',
                    key: 'id'
                },
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            code: {
                type: DataTypes.STRING,
                allowNull: false,
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
                defaultValue: Date
            }
        },
        {
            sequelize,
            modelName: 'City',
            timestamps: false
        }
    );
}


export default City;