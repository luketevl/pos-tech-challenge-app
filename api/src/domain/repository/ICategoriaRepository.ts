import { CategoriaDTO } from "../dto/CategoriaDTO";

export default interface ICategoriaRepository {
  getAll(): Promise<Array<CategoriaDTO>>
}
