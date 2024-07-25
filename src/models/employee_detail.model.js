import { Model, DataTypes } from 'sequelize';
import User from './user.model.js';
import sequelize from './sequelize.js';

class EmployeeDetail extends Model { }

export function initEmployeeDetail(){
    EmployeeDetail.init(
        {
            id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id: {
                type: DataTypes.BIGINT,
                references: {
                    model: 'users',
                    key: 'id'
                },
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            },
            organisation_id: {
                type: DataTypes.BIGINT,
                references: {
                    model: 'organisations',
                    key: 'id'
                },
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            },
            employee_role_id: {
                type: DataTypes.BIGINT,
                references: {
                    model: 'employee_roles',
                    key: 'id'
                },
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            },
            name : {
                type: DataTypes.STRING,
                allowNull : false,
            },
            address : {
                type: DataTypes.STRING,
                allowNull : false,
            },
            address2 : DataTypes.STRING,
    
            city_id: {
                type: DataTypes.BIGINT,
                references: {
                    model: 'cities',
                    key: 'id'
                },
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
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
            country_id: {
                type: DataTypes.BIGINT,
                references: {
                    model: 'countries',
                    key: 'id'
                },
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            },
            postal_code: DataTypes.INTEGER,
            created_by: {
                type: DataTypes.BIGINT,
                references: {
                    model: 'users',
                    key: 'id'
                },
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            },
            updated_by: {
                type: DataTypes.BIGINT,
                references: {
                    model: 'users',
                    key: 'id'
                },
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            },
            deleted_by: {
                type: DataTypes.BIGINT,
                references: {
                    model: 'users',
                    key: 'id'
                }
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: sequelize.NOW
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: sequelize.NOW,
                onUpdate: sequelize.NOW
            },
            deleted_at: DataTypes.DATE
        },
        {
            sequelize,
            tableName : "employee_details",
            modelName: 'EmployeeDetail',
            timestamps: false,
            defaultScope: {
                include: [
                    { model: User, as: 'user' }
                ]
            }
        }
    );

    EmployeeDetail.hasOne(User, { foreignKey: 'id', as: 'user' })
}



export default EmployeeDetail;