/*转载自：http://www.jb51.net/article/58660.htm*/

//首先请求（require）Node.js自带的 http 模块，并且把它赋值给 http 变量
var http=require("http");//引入http模块   <script src=""></script>

//接下来我们调用http模块提供的函数： createServer 
//这个函数会返回一个对象，这个对象有一个叫做 listen 的方法，这个方法有一个数值参数，指定这个HTTP服务器监听的端口号。
http.createServer(function(request,response){//创建一个服务器
	//客户端发送给服务器端的信息被封装在request对象中，即，服务器要获取客户端的信息，必须通过request这个对象
	//服务器向客户端回送信息，通过response对象
	//console.info(request);
	//console.info(response);
	response.writeHead(200, {"Content-Type": "text/plain"}); 
	response.write("Hello World!");
	response.end();//响应结束

//}).listen(6666,'127.0.0.1');//指定服务器监听的ip地址和端口号，如果监听所有地址，则ip地址可以省略
}).listen(6666);


//为了提高可读性，可以改写成：
var http = require("http");
function onRequest(request, response) { 
	response.writeHead(200, {"Content-Type": "text/plain"}); //发送一个HTTP状态200 和 HTTP头的内容类型（content-type）
 	response.write("Hello World!");//在HTTP响应主体中发送文本“Hello World”。
	response.end();//响应结束
}
 http.createServer(onRequest).listen(8888);
 //在这里，我们定义了一个onRequest()函数，并将它作为参数传给createServer，类似回调函数。
 //我们给某个方法传递了一个函数，这个方法在有相应事件发生时调用这个函数来进行回调，我们把这叫做基于事件驱动的回调。






//另外的方法
var http=require("http");//引入http模块   <script src=""></script>
var server=http.createServer();//创建一个服务器
server.on("request",function(req,res){//客户端每发送一个请求，就会触发这个监听事件一次
	console.info(req.url);
	res.write("<meta charset='utf-8' />");
	res.write("谢谢访问...");
	res.end();
});

server.listen(6666,function(){//启动服务器，并监听6666端口
	console.info("服务器启动成功...");
});
