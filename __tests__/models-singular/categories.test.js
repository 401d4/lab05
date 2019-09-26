const Categories = require('../../models-singular/categories.js'); //BRING IN THE MODEL 
let categories = new Categories(); //SET UP REPO FOR TESTING?

const supergoose = require('../supergoose.js'); //BRING IN OUR MEMORY SERVER 

describe('Categories Model (Singular)', () => {

  // How will you handle both the happy path and edge cases in these tests?

  it('can create() a new category', async () => {
    let testCategory = await categories.create({ name: 'test-category', description: 'testing out the ability to create a category w/ mongoose'});

    expect(testCategory).toHaveProperty('_id');
    expect(testCategory).toHaveProperty('name','test-category');
  });

  it('can get() a category', async () => {
    let testCategory1 = await categories.create({ name: 'test-category1', description: 'testing out the ability to create a category w/ mongoose 1'});
    let testCategory2 = await categories.create({ name: 'test-category2', description: 'testing out the ability to create a category w/ mongoose 2'});
    let testCategory3 = await categories.create({ name: 'test-category3', description: 'testing out the ability to create a category w/ mongoose 3'});

    let lookup = await categories.get(testCategory2._id);

    expect(lookup).toHaveProperty('_id', testCategory2._id);
    expect(lookup).not.toHaveProperty('_id', testCategory1._id);
    expect(lookup).toHaveProperty('name', 'test-category2');
  });

  it('can get() all categories', () => {
  });

  it('can update() a category', () => {
  });

  it('can delete() a category', () => {
  });

});