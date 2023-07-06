import { Router, Request, Response } from 'express'
import executeCadastrar from '../../useCase/CadastrarProduto'
import executeEditar from '../../useCase/EditarProduto'
import executeApagar from '../../useCase/ApagarProduto'
import executeBuscar from '../../useCase/BuscarProdutoCategoria'

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
routes.patch('/:id', async (req: Request, res: Response) => {
  try{
    const { id } = req.params
    const result = await executeEditar(id, req.body)
    res.status(200).json(result)
  } catch(ex: any){
      console.log(ex)
      res.status(403).json({ message: ex })
  }
})
routes.delete('/:id', async (req: Request, res: Response) => {
  try{
    const { id } = req.params
    const result = await executeApagar(id)
    res.status(200).json({
      message: !!result 
    })
  } catch(ex: any){
      console.log(ex)
      res.status(403).json({ message: ex })
  }
})
routes.get('/categoria/:idCategoria', async (req: Request, res: Response) => {
    try{
    const { idCategoria } = req.params
    const result = await executeBuscar(idCategoria)
    res.status(200).json(result)
  } catch(ex: any){
      console.log(ex)
      res.status(404).json({ message: ex })
  }
})
export default routes