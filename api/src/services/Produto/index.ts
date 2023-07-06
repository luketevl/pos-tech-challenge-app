import { ProdutoDTO } from '../../domain/dto/ProdutoDTO'
import IProdutoRepository from '../../domain/repository/IProdutoRepository'

export default class ProdutoService {
  constructor(private readonly ProdutoRepository: IProdutoRepository) {}

  async create(data: ProdutoDTO){
    const result = await this.ProdutoRepository.save(data)
    return result
  }

  async update(id: string, data: ProdutoDTO){
    const result = await this.ProdutoRepository.edit(id, data)
    return result
  }

  async remove(id: string){
    const result = await this.ProdutoRepository.remove(id)
    return result
  }

  async getByCategoria(id_categoria: string) {
    const result = await this.ProdutoRepository.getByCategoria(id_categoria)
    return result
  }
  
}