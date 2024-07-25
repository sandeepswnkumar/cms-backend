import { Model, DataTypes } from 'sequelize';
import User from './user.model.js';
import sequelize from './sequelize.js';

class EmployeeRole extends Model { }

export function initEmployeeRole(){
    EmployeeRole.init(
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
            enabled : {
                type : DataTypes.BOOLEAN,
                defaultValue : true,
            },
            created_by: {
                type: DataTypes.BIGINT,
                allowNull: true,
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
            tableName : 'employee_roles',
            modelName: 'EmployeeRole',
            timestamps: false,
        }
    );
}

export default EmployeeRole;