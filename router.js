const Router = require('koa-router');
let router = new Router();
const koaBody = require('koa-body')({
    multipart: true,  // 允许上传多个文件
});
let id = '2'
let data = {
    list: [
        {
            id: '1',
            name: '张三',
            tel: '13000000000',
            address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
            id: '2',
            name: '李四',
            tel: '1310000000',
            address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
    ],
    disabledList: [
        {
            id: '3',
            name: '王五',
            tel: '1320000000',
            address: '浙江省杭州市滨江区江南大道 15 号'
        }
    ],
    add: '新增地址',
    edit: '编辑地址',
    disabledText: '以下地址超出配送范围'
}
// 注册
// 第二章 2-1
router.get('/addressLis', async (ctx) => {
    ctx.body = {
        code:200,
        data:data
    }
});
// 第二章 2-2
//form-data
router.post('/user/new/form',koaBody, async (ctx) => {
    console.log(ctx.request.body)
    ctx.body = '1'
});
router.post('/user/new/json', async (ctx) => {
    console.log(ctx.request.body)
    ctx.body = '1'
});
router.del('/user/:id', async (ctx) => {
    let arr = data.filter(item=>{
        return item.id == ctx.params.id
    })
    data = data.filter(item=>{
        return item.id != ctx.params.id
    })
    if(arr.length){
        ctx.body={
            code:200,
            message:'删除成功'
        }
    }else{
        ctx.body={
            code:500,
            message:'用户不存在'
        }
    }
});
router.put('/second', async (ctx) => {
    console.log(ctx)

});
router.patch('/second', async (ctx) => {
    console.log(ctx)

});
module.exports = router;