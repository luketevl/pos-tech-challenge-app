import prisma from '../../../prisma'
import { CategoriaDTO } from "../../../domain/dto/CategoriaDTO";
import ICategoriaRepository from '../../../domain/repository/ICategoriaRepository'

export default class CategoriaDatabase implements ICategoriaRepository {
  getAll(): Promise<CategoriaDTO[]> {
    return prisma.categorias.findMany()
  }
  

}