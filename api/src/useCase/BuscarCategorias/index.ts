import CategoriaService from '../../services/Categoria'
import CategoriaDatabase from '../../infra/repository/Categoria/DatabaseRepository'

const execute = async () => {
  const categoriaService = new CategoriaService(new CategoriaDatabase())
  return categoriaService.index()
}

export default execute