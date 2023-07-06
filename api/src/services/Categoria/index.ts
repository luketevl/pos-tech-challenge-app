import ICategoriaRepository from '../../domain/repository/ICategoriaRepository'

export default class CategoriaService {
  constructor(private readonly CategoriaRepository: ICategoriaRepository) {

  }

  async index(){
    const result = await this.CategoriaRepository.getAll()
    return result
  }
  
}