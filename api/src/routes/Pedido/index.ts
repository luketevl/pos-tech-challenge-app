import { Router, Request, Response } from 'express'
import executeCadastrar from '../../useCase/CadastrarPedido'
import executeListar from '../../useCase/ListarPedidos'

const routes = Router()

routes.post('/', async (req: Request, res: Response) => {
  try{
    const result = await executeCadastrar(req.body)
    res.status(200).json(result)
  } catch(ex: any){
      console.log(ex)
      res.status(403).json({ message: ex })
  }
})
routes.get('/', async (_req: Request, res: Response) => {
  const result = await executeListar()
  res.status(200).json(result)
})
export default routes