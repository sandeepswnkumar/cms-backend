import { Model, DataTypes } from 'sequelize';
import sequelize from './sequelize.js';
import bcrypt from 'bcrypt';

class User extends Model {
    compare_password(password) {
        return bcrypt.compareSync(password, this.password);
    }

}

export function initUser(){
    User.init(
        {
            id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            registration_no: DataTypes.STRING,
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            user_type: {
                type: DataTypes.ENUM('admin', 'staff', 'student'),
                allowNull: false
            },
            email_verified_at : {
                type: DataTypes.DATE,
                allowNull: true,
            },
            refresh_token : {
                type : DataTypes.STRING,
                allowNull : true,
            },
            avatar_url : {
                type : DataTypes.STRING,
                allowNull : true,
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
            modelName: 'User',
            timestamps: false,
            defaultScope : {
                attributes : {
                    exclude : ['password']
                }
            },
            scopes : {
                withPassword : {
                    attributes : {}
                }
            }
        }
    );

    User.addHook('beforeCreate', async (user, options) => {
        const hash = await bcrypt.hash(user.password, 10);
        user.password = hash;
    })
    
}



export default User;