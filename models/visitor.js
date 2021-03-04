const Sequelize = require('sequelize');

const sequelize = require('./../util/database');

const Visitor = sequelize.define('visitor_seq', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING, allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING, allowNull: false
    },
    password_hash: {
        type: Sequelize.STRING, allowNull: false
    },
    mobile: {
        type: Sequelize.INTEGER, allowNull: false
    },
    // created_at:  { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    // updated_at:  { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    isActive: { type: Sequelize.INTEGER, defaultValue: 1}

});

module.exports = Visitor;