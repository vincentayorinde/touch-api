
import bcrypt from 'bcryptjs';
import { getToken, randomString } from '../../utils';

module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define(
        'user',
        {
            first_name: DataTypes.STRING,
            last_name: DataTypes.STRING,
            other_name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            role: DataTypes.STRING
        },
        {
            hooks: {
                beforeCreate: async (user) => {
                    user.password = await bcrypt.hash(user.password, 10);
                },
            },
        }
    );
    user.associate = function (models) {
        // associations can be defined here
        user.hasMany(models.people,{
            foreignKey: 'userId',
            as: 'user',
            cascade: true,
          })
    };
    user.prototype.passwordsMatch = function match(password) {
        return bcrypt.compare(password, this.password);
    };
    user.prototype.response = function response(addToken = true) {
        const userData = {
            email: this.email,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            first_name: this.first_name,
            last_name: this.last_name,
            other_name: this.last_name,
            id: this.id,
            role: this.role,
        };
        if (addToken) userData.token = getToken(this.id, this.email);
        return userData;
    };
    return user;
};