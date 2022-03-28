import index from './modules/index'
import user from './modules/user'

export default (router: Router) => {
  index(router)
  user(router)
}
