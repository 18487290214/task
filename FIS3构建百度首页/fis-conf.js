fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});

fis.match('*.{js,css}', {
  useHash: true
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')  //js压缩
});

fis.match('*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css') //css压缩
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')  //png图片压缩
});

fis.match('*.html', {
  //invoke fis-optimizer-html-minifier
  optimizer: fis.plugin('html-minifier')  //html压缩
});