import { Router, Request, Response } from 'express'
import executeCadastrar from '../../useCase/CadastrarCliente'
import executeBuscar from '../../useCase/BuscarCliente'

const routes = Router()

routes.get('/:cpf', async (req:Request, res: Response) => {
  try{
    const { cpf } = req.params
    const result = await executeBuscar(cpf)
    if(!result){
      res.status(404).json({ message: 'Usuario nao encontrado'})
      return
    } 
    res.status(200).json(result)
  } catch(ex: any){
      console.log(ex)
      res.status(40).json({ message: ex })
  }
})
routes.post('/', async (req:Request, res: Response) => {
  try{
    const result = await executeCadastrar(req.body)
    res.status(200).json(result)
  } catch(ex: any){
      console.log(ex)
      res.status(403).json({ message: ex })
  }
})
export default routes