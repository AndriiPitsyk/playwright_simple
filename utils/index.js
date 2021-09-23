const faker = require('faker');

class DataGenerator {
    static generateUsername() {
        return `${faker.name.firstName()}${faker.random.number()}`.toLowerCase();
    }

    static generateUserEmail() {
        return faker.internet.email().toLowerCase();
    }

    static generateUserPassword() {
        return faker.internet.password();
    }

    static generateTitle(wordCount = 4) {
        return faker.lorem.sentence(wordCount);
    }

    static generateDescription(wordCount = 10) {
        return faker.lorem.words(wordCount);
    }

    static generateTag(length = 10) {
        return faker.lorem.word(length);
    }

    static generateBody(wordCount = 10) {
        return faker.lorem.words(wordCount);
    }
}

module.exports = DataGenerator;
