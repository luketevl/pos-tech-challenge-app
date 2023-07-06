import { PedidoItemDTO } from "./PedidoItemDTO"

export type PedidoDataDTO = {
    id?: string 
    status: string
    id_cliente: string
}
export type PedidoDTO = PedidoDataDTO & {
    pedido_items: Array<{
        quantidade: number
        id_produto: string
    }>
}
export type PedidoListDTO = PedidoDTO & {
    pedido_items: Array<PedidoItemDTO> 
}
export type PedidosDTO = Array<PedidoDataDTO>
