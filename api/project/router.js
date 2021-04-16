// build your `/api/projects` router here
const express = require('express')
const Projects = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
  Projects.find()
  .then(projects => {
    res.status(200).json(trueOrFalse(projects))
  })
  .catch(next);
})

router.post('/', (req, res, next) => {
  Projects.add(req.body)
  .then(project => {
    res.status(201).json(trueOrFalse(project)[0])
  })
  .catch(next)
})

const trueOrFalse = projects => {
  return projects.map(proj => {
    return {
      ...proj,
      project_completed: proj.project_completed ? true : false
    }
  })
}

module.exports = router