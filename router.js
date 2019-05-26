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
router.del('/contact/:id', async (ctx) => {
	data = data.filter(item => item.id != ctx.params.id)
	console.log(data)
	ctx.body = {
		code: 200,
		message: '删除成功'
	}
});
module.exports = router;