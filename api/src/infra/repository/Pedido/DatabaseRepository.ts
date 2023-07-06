import prisma from '../../../prisma'
import { PedidoDTO, PedidoDataDTO } from "../../../domain/dto/PedidoDTO";
import IPedidoRepository from '../../../domain/repository/IPedidoRepository'

export default class PedidoDatabase implements IPedidoRepository {
  save(data: PedidoDTO): Promise<PedidoDataDTO> {
    const newData = { 
      data: {
        status: data.status,
        id_cliente: data.id_cliente,
        pedido_items: {
          create: data.pedido_items
        }
      }
    }
    return prisma.pedidos.create(newData)
  }

  getAll(): Promise<PedidoDTO[]> {
    return prisma.pedidos.findMany({
      include: {
        clientes: true,
        pedido_items: {
          include: {
            produtos: true
          }
        } 
      }
    })
  }
  

}