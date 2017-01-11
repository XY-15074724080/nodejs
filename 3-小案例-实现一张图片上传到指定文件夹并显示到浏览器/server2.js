/**
 * Created by Administrator on 2017/01/11 0011.
 */
var express = require('express');
var multer = require('multer');//处理文件上传的
var bodyparser = require('body-parser');//处理post方式的请求实体部分的
var fs = require('fs');//处理文件的
var app = express();//创建一个应用程序
//使用静态中间件
app.use(express.static("djfwq"));//默认到djfwq文件夹下查找静态资源，所有的请求路径从djfwq文件夹开始算
app.use(bodyparser.urlencoded({extend : false}));//配置和使用body-parser中间件

var fileUploadPath="/djfwq/pic";//上传文件存入服务器的路径
var upload = multer({dest : '.'+fileUploadPath});//上传文件的目录设置//配置文件上传的中间件

app.get("/",function(req,res){//监听"127.0.0.1:8888/"这个路径，指定显示的是login.html页面
    res.sendFile(__dirname+req.url+"index2.html");//必须使用绝对路径
});

app.post('/uploadPic',upload.array("upload"),function(req,res,next){//监听"127.0.0.1:8888/uploadPic"这个路径
    var fileName="";
    var filePath="";
    var file;
    if(req.files!=undefined){
        for(var i in req.files){
            file=req.files[i];
            fileName=new Date().getTime()+"_"+file.originalname;
            filePath=__dirname+fileUploadPath+"/"+fileName;
            fs.renameSync(file.path,__dirname+fileUploadPath+"/"+fileName);//重命名文件
            res.sendFile(filePath);
        }
    }
})

app.listen("8888",function(err){
    if(err){
        console.info(err);
    }else{
        console.info("服务器开启成功......");
    }
});