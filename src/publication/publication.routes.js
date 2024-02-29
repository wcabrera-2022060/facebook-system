'use strict'

import { Router } from 'express'
import { validateJwt } from '../../middlewares/roles.js'
import { createPublication, deletePublication, getPublications, searchPublication, updatePublication } from './publication.controller.js'

const api = Router()

api.post('/createPublication', [validateJwt], createPublication)
api.get('/getPublication', [validateJwt], getPublications)
api.post('/searchPublication/:id', [validateJwt], searchPublication)
api.put('/updatePublication/:id', [validateJwt], updatePublication)
api.delete('/deletePublication/:id', [validateJwt], deletePublication)

export default api