import Index from '../../controller/index'

const index = (router: Router) => {
  router.get('/', Index.home)
  router.get('/download', Index.download)
  router.post('/upload', Index.upload)
}

export default index
