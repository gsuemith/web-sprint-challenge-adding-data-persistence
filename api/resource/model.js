// build your `Resource` model here
const db = require('../../data/dbConfig')

const find = () => {
  return db('resources')
}

const add = resource => {
  return db('resources')
    .insert(resource)
    .then(([resource_id]) => {
      return db('resources')
        .where({ resource_id })
        .first()
    })
}

module.exports = {
  find,
  add
}