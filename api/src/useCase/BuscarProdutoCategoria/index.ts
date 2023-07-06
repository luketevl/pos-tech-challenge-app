import ProdutoService from '../../services/Produto'
import ProdutoDatabase from '../../infra/repository/Produto/DatabaseRepository'

const execute = async (id: string) => {
  const produtoService = new ProdutoService(new ProdutoDatabase())
  return produtoService.getByCategoria(id)
}
export default execute