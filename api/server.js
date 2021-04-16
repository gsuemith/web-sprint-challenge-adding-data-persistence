// build your server here and require it from index.js
const express = require('express')
const helmet = require('helmet')

const projectRouter = require('./project/router')
const resourceRouter = require('./resource/router')
const taskRouter = require('./task/router')

const server = express()

//global middlewares
server.use(helmet())
server.use(helmet())

//routers
server.use('/api/projects', projectRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', taskRouter)

module.exports = server