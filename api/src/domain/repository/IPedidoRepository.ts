import { PedidoDTO, PedidoDataDTO, PedidosDTO } from "../dto/PedidoDTO"

export default interface IPedidoRepository {
  save(data: PedidoDTO): Promise<PedidoDataDTO | null>
  getAll(): Promise<PedidosDTO>
}
