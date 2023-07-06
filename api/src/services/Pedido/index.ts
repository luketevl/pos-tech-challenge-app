import { PedidoDTO } from '../../domain/dto/PedidoDTO'
import IPedidoRepository from '../../domain/repository/IPedidoRepository'

export default class PedidoService {
  constructor(private readonly PedidoRepository: IPedidoRepository) {

  }

  async index(){
    const result = await this.PedidoRepository.getAll()
    return result
  }

  async create(data: PedidoDTO){
    const result = await this.PedidoRepository.save(data)
    return result
  }
  
}