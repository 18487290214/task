//启用插件
fis.match('::packager', {
  spriter: fis.plugin('csssprites'),
  'html-minifier': fis.plugin('fis-optimizer-html-minifier'),
   autoprefixer: fis.plugin('fis3-preprocessor-autoprefixer')
});

//css预处理器，less编译
fis.match('*.less', {
  parser: fis.plugin('less'),   // fis-parser-less 插件进行解析
  rExt: '.css',   // .less 文件后缀构建后被改成 .css 文件
  useHash: true,
  useSprite: true,
  optimizer: fis.plugin('clean-css')
});

//CSS后处理器autoprefixer，
fis.match('*.{css,less}', {
  preprocessor: fis.plugin('autoprefixer', {
    "browsers": ["Android >= 2.1", "iOS >= 4", "ie >= 8", "firefox >= 15"],
    "cascade": true
  })
})

//开启md5戳
fis.match('*.{js,css}', {
  useHash: true
});
fis.match('::image', {
    useHash: true
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')  //js压缩
});

fis.match('*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css')  //css压缩
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')  //png图片压缩
});

fis.match('*.html', {
  optimizer: fis.plugin('html-minifier')  //html压缩
});