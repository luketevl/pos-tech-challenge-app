import './config/Env'
import app from './app'
import { PORT } from './config/App'

app.listen(PORT, () => {
  console.log(`Server listen port ${PORT}`)
})