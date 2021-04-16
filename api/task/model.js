// build your `Task` model here
const db = require('../../data/dbConfig')

const find = () => {
  return db('tasks')
}

const add = task => {

}

module.exports = {
  find,
  add
}