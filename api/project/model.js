// build your `Project` model here
const db = require('../../data/dbConfig')

const find = () => {
  return db('projects')
}

const add = project => {
  return db('projects')
    .insert(project)
    .then(([project_id]) => {
      return db('projects')
        .where({ project_id })
    })
}

module.exports = {
  find,
  add
}