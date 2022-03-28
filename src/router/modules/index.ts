import Index from '../../controller/index'

const index = (router: Router) => {
  router.get('/', Index.home)
}

export default index
