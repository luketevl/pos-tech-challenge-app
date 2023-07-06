import { ProdutoDTO } from "../dto/ProdutoDTO"

export default interface IProdutoRepository {
  save(data: ProdutoDTO): Promise<ProdutoDTO>
  edit(id: string, data: ProdutoDTO): Promise<ProdutoDTO>
  remove(id: string): Promise<boolean>
  getByCategoria(id_categoria: string): Promise<Array<ProdutoDTO> | null>
}
