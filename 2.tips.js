//js中跳出多重循环
outter:for(var i=1;i<10;i++){
	for(var j=1;j<5;j++){
		if(i*j==15){
			break outter;
		}
		console.info(i+" ,"+j);
	}
	console.info(i+"...");
}



//全局对象——global
//通过node执行js与我们平时在浏览器中执行js有所不同，平常我们在网页中执行js代码，我们的全局对象就是window，而所谓的最顶级的global对象，在浏览器中无法直接访问，我们只能通过window这个代理来访问到全局对象的相关属性。但是在node中，我们是可以直接访问到全局对象global的，如：
console.log(global);//我们可以直接输出global对象

/*global中常用的变量：
__dirname：在nodejs中执行的js代码所在的绝对目录。注意：前面有两个下划线。
__filename：在nodejs中执行的js代码所在的文件全路径及文件名。
*/
console.log(__dirname);//当前执行的文件所在的目录
console.log(__filename);//当前执行的文件的路径(包括文件名)

/*global中的常用对象：console
 * console中常用的方法有：
 * 	log()：打印日志
 * 	info()：打印信息
 * 	error()：打印错误
 * 	warn()：打印警告
 * 	time()与timeEnd()：统计一段代码的执行时间
 */
console.time("test");//任意给定一个字符串，注意跟timeEnd("")中的保持前后一致
for(var i=0;i<100;i++){
	
}
console.timeEnd("test");

/*global中的常用对象：process（存放程序执行的一些信息）
 * process中常用的方法和属性有：
 * process.stdout/process.stderr：输出信息
 * process.stdin：输入信息
 * process.cwd()：返回当前过程的工作目录
 * process.on()：监听事件
 * process.argv：运行时程序附加在命令行中参数
 */
process.stdout.write("This is stdout");
process.stdout.write("This is stderr");

process.stdout.write("请输入：");
process.stdin.setEncoding("utf-8");//设置编码集
process.stdin.on("data",function(data){//监听用户的输入，用户输入的信息会自动保存到回掉函数的data中
	console.info(data);
});//此时没有信息也可以触发

process.stdout.write("请输入：");
process.stdin.setEncoding("utf-8");//设置编码集
process.stdin.on("readable",function(data){//当有信息可以读取时触发，此时回掉函数中没有参数
	console.info(process.stdin.read());//读取用户的输入
});