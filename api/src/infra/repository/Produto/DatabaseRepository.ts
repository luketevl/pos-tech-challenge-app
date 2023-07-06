import prisma from '../../../prisma'
import { ProdutoDTO } from "../../../domain/dto/ProdutoDTO";
import IProdutoRepository from '../../../domain/repository/IProdutoRepository'

export default class ProdutoDatabase implements IProdutoRepository {
  save(data: ProdutoDTO): Promise<ProdutoDTO> {
    return prisma.produtos.create( { data } ) 
  }

  edit(id: string, data: ProdutoDTO): Promise<ProdutoDTO> {
    return prisma.produtos.update(
      { 
        data,
        where: {
          id
        }
      })
  }

  async remove(id: string): Promise<boolean> {
    const result = await prisma.produtos.delete({ where: { id }})
    return !!result
  }

  getByCategoria(id_categoria: string): Promise<Array<ProdutoDTO> | null> {
    return prisma.produtos.findMany({ where: { id_categoria }})
  }

}