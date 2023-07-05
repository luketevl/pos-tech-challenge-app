export default interface ClienteRepository {
  save: (data: unknown) => Promise<void>
  edit: (id: string) => Promise<void>
  remove: (id: string) => Promise<void>
}
