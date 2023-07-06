import { ClienteDTO } from "../dto/ClienteDTO"

export default interface IClienteRepository {
  save(data: ClienteDTO): Promise<ClienteDTO>
  getByCpf(cpf: string): Promise<ClienteDTO | null>
}
