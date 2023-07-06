import ClienteService from '../../services/Cliente'
import ClienteDatabase from '../../infra/repository/Cliente/DatabaseRepository'

 const execute = async (data: string) => {
  const clienteService = new ClienteService(new ClienteDatabase())
  return clienteService.getByCpf(data)
}
export default execute