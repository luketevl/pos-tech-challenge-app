import { Router, Request, Response } from 'express'
import execute from '../../useCase/BuscarCategorias'

const routes = Router()

routes.get('/', async (_req: Request, res: Response) => {
  const result = await execute()
  res.status(200).json(result)
})
export default routes