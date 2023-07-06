import { ProdutoDTO } from "./ProdutoDTO"

export interface PedidoItemDTO {
    id?: string 
    quantidade: number 
    id_produto: string
    id_pedido: string 
    produtos: Array<ProdutoDTO> 
}