const Router = require('koa-router');
let router = new Router();
const koaBody = require('koa-body')({
    multipart: true,  // 允许上传多个文件
});
let data = [
    {
        id:1,
        name:'小红',
        level:1,
        gender: 1,
    },
    {
        id:2,
        name:'小橙',
        level:1,
        gender: 1,
    },
    {
        id:3,
        name:'小黄',
        level:2,
        gender: 0,
    },
    {
        id:4,
        name:'小绿',
        level:1,
        gender: 0,
    },
    {
        id:5,
        name:'小白',
        level:2,
        gender: 0,
    }
];
// 注册
// 第二章 2-1
router.get('/userList', async (ctx) => {

    let level = ctx.query.level
    let gender = ctx.query.gender
    let res = data.filter((item=>{
        if(level && gender){
            return item.level == level && item.gender == gender
        }
        if(level){
            return item.level == level
        }
        if(gender){
            return item.gender == gender
        }
        return true
    }))
    ctx.body = {
        code:200,
        data:res
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