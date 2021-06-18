import { Router } from 'express'

import { FuncionariosController } from './controllers/FuncionariosController'

import { EntregaEPIController } from './controllers/EntregaEPIController'

const routes = Router();

const funcionariosController = new FuncionariosController()

const entregaEPIController = new EntregaEPIController()

routes.post('/funcionarios', funcionariosController.create)
routes.get('/funcionarios', funcionariosController.index)

routes.post('/entregaEPI', entregaEPIController.create)
routes.get('/entregaEPI', entregaEPIController.index)
routes.get('/entregaEPI/:id', entregaEPIController.show)
routes.delete('/entregaEPI/:id', entregaEPIController.delete)
routes.put('/entregaEPI/:id', entregaEPIController.update)

export { routes }

