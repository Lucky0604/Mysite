//引入mongoose模块

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogSchema = new Schema({
    title:String,
    content:String
});

module.exports = mongoose.model('Blog',BlogSchema);

//定义模型
//module.exports允许我们当其他文件调用时通过this被调用



