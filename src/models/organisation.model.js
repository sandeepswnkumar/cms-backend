import { Model, DataTypes } from 'sequelize';
import User from './user.model.js';
import sequelize from './sequelize.js';

class Organisation extends Model { }

export function initOrganisation(){
    Organisation.init(
        {
            id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            organisation_name : {
                type: DataTypes.STRING,
                allowNull : false,
            },
            organisation_email : {
                type: DataTypes.STRING,
                allowNull : false,
            },
            organisation_registration_no : {
                type: DataTypes.STRING,
            },
            organisation_address_line1 : {
                type: DataTypes.STRING,
            },
            organisation_address_line2 : {
                type: DataTypes.STRING,
                allowNull : false,
            },
            organisation_city_id: {
                type: DataTypes.BIGINT,
                references: {
                    model: 'cities',
                    key: 'id'
                },
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            },
            organisation_state_id: {
                type: DataTypes.BIGINT,
                references: {
                    model: 'states',
                    key: 'id'
                },
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            },
            organisation_country_id: {
                type: DataTypes.BIGINT,
                references: {
                    model: 'countries',
                    key: 'id'
                },
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            },
            organisation_registration_date: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: sequelize.NOW
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
            updated_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: sequelize.NOW
            },
            deleted_by: {
                type: DataTypes.BIGINT,
                references: {
                    model: 'users',
                    key: 'id'
                },
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            },
            deleted_at: {
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            modelName: 'Organisation',
            timestamps: false,
            defaultScope: {
                
            }
        }
    );
}

export default Organisation;