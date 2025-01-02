const { faker, da } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class UserService {

  constructor(){
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 5;
    for(let u = 0; u < limit; u++){
      this.users.push({
        id: faker.string.uuid(),
        name: faker.person.firstName(),
        surname: faker.person.lastName(),
        image: faker.image.avatar(),
        email: faker.internet.email(),
      })
    }
  }

  async create(data) {
    const newUser = {
      id: faker.string.uuid(),
      ...data
    }
    this.users.push(newUser);
    return newUser;
  }

  find(){
    return new Promise((resolve, reject) => {
      resolve(this.users);
    })
  }

  async findOne(id){
    const user = this.users.find(item => item.id === id);
    if(!user){
      throw boom.notFound('user not found');
    }
    return user;
  }

  async update(id, changes) {
    const index = this.users.findIndex(item => item.id === id);
    if(index === -1) {
      throw boom.notFound('user not found');
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes
    };

    return this.users[index];
  }

  async delete(id){
    const index = this.users.findIndex(item => item.id === id);
    if(index === -1) {
      throw boom.notFound('user not found');
    }
    this.users.splice(index, 1);
    return { id };
  }
}

module.exports = UserService;
