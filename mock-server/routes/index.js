const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})
router.get('/data', async (ctx, next) => {
  ctx.body = {
    inputValue: 'Writing Something',
    todoList: [
      '任务0',
      '任务1',
      '任务2',
      '任务3',
      '任务4',
      '任务5',
    ]
  }
})
router.post('/submit', async (ctx, next) => {
  console.log(ctx.request.body)
  ctx.body = {
    status:'success'
  }
})

module.exports = router
