import prisma from '../../../prisma'
import { ClienteDTO } from "../../../domain/dto/ClienteDTO";
import IClienteRepository from '../../../domain/repository/IClienteRepository'

export default class ClienteDatabase implements IClienteRepository {
   save(data: ClienteDTO ){
    return prisma.clientes.create({ data })
  }

   getByCpf(cpf: string){
     return prisma.clientes.findFirst({
      where: {
        cpf
      }
    })
  }

}