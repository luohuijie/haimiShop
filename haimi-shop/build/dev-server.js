require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})


console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})
var Routes = express.Router()

// 首页(推荐)挂载路由 
var navList = require('../mock/navlist.json')
var indexData = require('../mock/indexData.json')
var prosList = require('../mock/prosList.json')
Routes.get('/navList', function (req, res) {
  res.json(navList);
})
Routes.get('/indexData', function (req, res) {
  res.json(indexData);
})
Routes.get('/prosList', function (req, res) {
  res.json(prosList);
})

// 首页(居家)挂载路由 
var juTitle = require('../mock/juTitle.json')
var juJia = require('../mock/juJia.json')
Routes.get('/childTitle3', function (req, res) {
  res.json(juTitle);
})
Routes.get('/childList3', function (req, res) {
  res.json(juJia);
})

// 首页(女装)挂载路由 
var meiZlist = require('../mock/meiZlist.json')
Routes.get('/childList13', function (req, res) {
  res.json(meiZlist);
})

// 首页(个户)挂载路由 
var gehuList = require('../mock/gehulist.json')
var gehuTitle = require('../mock/gehutitle.json')
Routes.get('/childList12', function (req, res) {
  res.json(gehuList);
})
Routes.get('/childTitle12', function (req, res) {
  res.json(gehuTitle);
})

// 首页(箱包)挂载路由 
var xBaoList = require('../mock/xbaolist.json')
var xBaoTitle = require('../mock/xbaotitle.json')
Routes.get('/childList8', function (req, res) {
  res.json(xBaoList);
})
Routes.get('/childTitle8', function (req, res) {
  res.json(xBaoTitle);
})

// 首页(家电)挂载路由 
var jiadList = require('../mock/jiadlist.json')
Routes.get('/childList9', function (req, res) {
  res.json(jiadList);
})

// 首页(厨房)挂载路由 
var chufList = require('../mock/chuflist.json')
var chufTilte = require('../mock/chuftitle.json')
Routes.get('/childList4', function (req, res) {
  res.json(chufList);
})
Routes.get('/childTitle4', function (req, res) {
  res.json(chufTilte);
})

// 首页(配饰)挂载路由 
var peiList = require('../mock/peilist.json')
var peiTitle = require('../mock/peititle.json')
Routes.get('/childList11', function (req, res) {
  res.json(peiList);
})
Routes.get('/childTitle11', function (req, res) {
  res.json(peiTitle);
})

// 首页(零食)挂载路由 
var linList = require('../mock/linlist.json')
var linTitle = require('../mock/lintitle.json')
Routes.get('/childList14', function (req, res) {
  res.json(linList);
})
Routes.get('/childTitle14', function (req, res) {
  res.json(linTitle);
})

// 首页(母婴)挂载路由 
var muList = require('../mock/mulist.json')
var muTitle = require('../mock/mutitle.json')
Routes.get('/childList7', function (req, res) {
  res.json(muList);
})
Routes.get('/childTitle7', function (req, res) {
  res.json(muTitle);
})

// 首页(家具)挂载路由 
var jiaList = require('../mock/jialist.json')
var jiaTitle = require('../mock/jiatitle.json')
Routes.get('/childList5', function (req, res) {
  res.json(jiaList);
})
Routes.get('/childTitle5', function (req, res) {
  res.json(jiaTitle);
})

// 分类(分类)挂载路由 
var classIndex = require('../mock/classify/classIndex.json')
Routes.get('/classIndex', function (req, res) {
  res.json(classIndex);
})

// 分类(品牌)挂载路由 
var classPin = require('../mock/classify/classPin.json')
Routes.get('/classPin', function (req, res) {
  res.json(classPin);
})

//购物车(购物车)挂载路由 
var shopPage = require('../mock/shopPage/shopPage.json')
Routes.get('/shopPage', function (req, res) {
  res.json(shopPage);
})

//Cat(Cat)挂载路由 
var shopCat = require('../mock/shopCat/shopCat.json')
Routes.get('/shopCat', function (req, res) {
  res.json(shopCat);
})

app.use('/api', Routes)
var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
