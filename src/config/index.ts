import development from './dev'
import production from './prod'

const config = process.env.NODE_ENV === 'production' ? production : development

export default config
