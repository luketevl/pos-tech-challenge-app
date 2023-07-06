import { ClienteDTO } from '../../domain/dto/ClienteDTO'
import IClienteRepository from '../../domain/repository/IClienteRepository'

export default class ClienteService {
  constructor(private readonly ClienteRepository: IClienteRepository) {}

  async create(data: ClienteDTO){
    const result = await this.ClienteRepository.save(data)
    return result
  }

  async getByCpf(cpf: string) {
    const result = await this.ClienteRepository.getByCpf(cpf)
    return result
  }
  
}