const DataGenerator  = require('../utils');

class UserBuilder {
    constructor() {
        this.data = {
            username: '',
            email: '',
            password: ''
        };

    }
    setUsername(name) {
        this.data['username'] = name;
        return this;
    }

    setUserEmail(email) {
        this.data['email'] = email;
        return this;
    }

    setUserPassword(password) {
        this.data['password'] = password;
        return this;
    }

    generateUserData() {
        const data = {
            username: this.data.username || DataGenerator.generateUsername(),
            email: this.data.email || DataGenerator.generateUserEmail(),
            password: this.data.password || DataGenerator.generateUserPassword()
        };
        return data;
    }

    clearUserData() {
        this.data = {
            username: '',
            email: '',
            password: ''
        };
        return this;
    }
}

module.exports = new UserBuilder();
