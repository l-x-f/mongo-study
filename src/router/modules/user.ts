import User from '../../controller/user'

export default (router: Router) => {
  router.get('/create', User.create)
  router.get('/api', User.list)
  router.get('/update', User.update)
  router.get('/delete', User.delete)
  router.get('/deleteMany', User.deleteMany)
}
