import multerConfig from './config/multer'
import model from './models/File'
import controller from './controllers/FileController'
import migration from './database/migrations'

const module = {
  multerConfig,
  model,
  controller,
  migration,
}

export default module
