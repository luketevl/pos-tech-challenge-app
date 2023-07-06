import ProdutoService from '../../services/Produto'
import ProdutoDatabase from '../../infra/repository/Produto/DatabaseRepository'
import { ProdutoDTO } from '../../domain/dto/ProdutoDTO'

const execute = async (data: ProdutoDTO) => {
  const produtoService = new ProdutoService(new ProdutoDatabase())
  return produtoService.create(data)
}
export default execute