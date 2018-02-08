var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* 在主页面获取新闻时的请求 */
router.get('/', function(req, res, next) {
  // 前端传过来数据
    var newstype = req.query.newstype;

    pool.query('SELECT * FROM `news` WHERE `newstype` = ? order by id desc', [newstype], function(error, results, fields) {
        // if (error) throw error;
        // console.log(results);
        if (results == "") {
            res.json({ "newsdata": "null" });
        } else {
            res.json(results);
        }
    });
});

/*
  主页获取幻灯片图片
 */
router.get('/focusnews', function(req, res, next) {
    pool.query('SELECT * FROM `news` WHERE `onfocus` = 1 order by id desc',function (error, results, fields) {
        if (results == "") {
            res.json({ "newsdata": "null" });
        } else {
            res.json(results);
        }
    });
});

module.exports = router;
