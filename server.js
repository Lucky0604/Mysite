//modules=====================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//var methodOverride = require('method-override');

var Blog = require('./app/models/model');
mongoose.connect('mongodb://localhost/test');
//配置项
//配置文件
app.use(bodyParser.json());

//将application/vnd.api+json当做json解析
//app.use(bodyParser.json({type:'application/vnd.api+json'}));

//解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
//设置静态文件路径
app.use(express.static(__dirname + '/public'));

var router = express.Router();
router.use(function(req, res, next){

    //add res.header escaped from  error:
    // XMLHttpRequest cannot load http://localhost:3000/api/Msg.
    // No 'Access-Control-Allow-Origin' header is present on the
    // requested resource. Origin 'http://127.0.0.1:3000' is therefore
    // not allowed access.
    res.header('Access-Control-Allow-Origin','*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log('data changed');
    next();
});
router.route('/Blog')
    .post(function(req, res){
        var blog = new Blog();
        blog.title = req.body.title;
        blog.content = req.body.content;
        blog.save(function(err){
            if(err){
                res.send(err);
            };
            res.json({message:'Message created!'})
        });
    })
    .get(function(req, res){
        Blog.find(function(err,blog){
            if(err){
                res.send(err);
            };
            res.json({message:blog});
        });
    });
router.route('/Blog/:blog_id')
    //获取每条blog的详情
    .get(function(req, res){
        Blog.findById(req.params.blog_id, function(err, blog){
            if(err){
                res.send(err);
            };
            res.json({message:blog});
        })
    })
    //编辑每条blog的信息
    .put(function(req, res){
        Blog.findById(req.params.blog_id, function(err, blog){
            if(err){
                res.send(err);
            };
            blog.title = req.body.title;
            blog.content = req.body.content;
            blog.save(function(err){

            })
        })
    })
app.use('/api',router);
//设定端口
var port = process.env.PORT || 5000;

//连接我们的mongodb数据库



//获取所有数据信息(post)
//转化成JSON


//覆盖X-HTTP-Method-Override request的头部信息（在request.simulate DELETE/PUT中）
//app.use(methodOverride('X-HTTP-Method-Override'));





//启动APP =============================
//在端口8080上启动APP
app.listen(port);

//提示用户
console.log('Server has listening on ' + port);

//暴露出app





















