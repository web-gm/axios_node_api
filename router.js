const Router = require('koa-router');
let router = new Router();
const koaBody = require('koa-body')({
	multipart: true,  // 允许上传多个文件
});
let id = 3
let data = [
	{
		name: '张三',
		tel: '13000000000',
		id: 1
	},
	{
		name: '李四',
		tel: '13000000001',
		id: 2
	},
	{
		name: '王五',
		tel: '13000000002',
		id: 3
	}
];
router.get('/contactList', async (ctx) => {
	ctx.body = {
		code: 200,
		data: data
	}
});
function getQueryVariable(url,variable)
{
	var query = url.split('?')[1];
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");
		if(pair[0] == variable){return pair[1];}
	}
	return(false);
}
//form-data
router.post('/contact/new/form', koaBody, async (ctx) => {
	let newData = ctx.request.body
	console.log(newData)
	id++
	newData.id = id
	data.push(newData)
	ctx.body = {
		code: 200,
		data: newData
	}
});
router.post('/contact/new/json', async (ctx) => {
	let newData = ctx.request.body
	console.log(newData)
	id++
	newData.id = id
	data.push(newData)
	ctx.body = {
		code: 200,
		data: newData
	}
});
router.put('/contact/edit', async (ctx) => {
	let newData = ctx.request.body
	console.log(newData)
	data.map((item, index) => {
		if (item.id == newData.id) {
			data[index] = newData
		}
	})
	console.log(data)
	ctx.body = {
		code: 200,
		data: newData
	}
});
router.patch('/contact/edit', async (ctx) => {
	let newData = ctx.request.body
	console.log(newData)
	data.map((item, index) => {
		if (item.id == newData.id) {
			data[index] = newData
		}
	})
	console.log(data)
	ctx.body = {
		code: 200,
		data: newData
	}
});
router.del('/contact', async (ctx) => {
	let id =getQueryVariable(ctx.request.url,'id')
	data = data.filter(item => item.id != id)
	console.log(id)
	ctx.body = {
		code: 200,
		message: '删除成功'
	}
});
router.get('/longtime', async (ctx) => {
	let query = ()=>{
		return new Promise((resolve,reject)=>{
			setTimeout(function () {
				resolve('请求成功');
			},5000)
		})
	}
	let result = await query();
		ctx.body = {
			code: 200,
			message: result
		}
});
module.exports = router;