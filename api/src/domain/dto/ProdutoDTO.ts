export interface ProdutoDTO {
    id?: string 
    nome: string 
    descricao?: string | null
    preco: number
    imagens?: string | null
    id_categoria?: string | null
}