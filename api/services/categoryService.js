const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class CategoryService {

  constructor() {
    this.categories = [];
    this.generateCategories();
  }

  generateCategories() {
    const limit = 20;
    for (let c = 0; c < limit; c++) {
      this.categories.push({
        id: faker.string.uuid(),
        name: faker.vehicle.model(),
      })
    }
  }

  async create(data) {
    const newCategory = {
      id: faker.string.uuid(),
      ...data
    }
    this.categories.push(newCategory);
    return newCategory;
  }

  find(){
    return new Promise((resolve, reject) => {
      resolve(this.categories)
    })
  }

  async findOne(id) {
    const category = this.categories.find((item => item.id === id));
    if(!category) {
      throw boom.notFound('category not found');
    }
    return category;
  }

  async update(id, changes) {
    const index = this.categories.findIndex(item => item.id === id);
    if(index === -1) {
      throw boom.notFound('category not found');
    }
    const category = this.categories[index];
    this.categories[index] = {
      ...category,
      ...changes
    };
    return this.categories[index];
  }

  async delete(id) {
    const index = this.categories.findIndex(item => item.id === id);
    if(index === -1) {
      throw boom.notFound('category not found');
    }
    this.categories.splice(index, 1);
    return { id };
  }
}

module.exports = CategoryService;
