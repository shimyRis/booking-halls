const express = require('express');
// const { getComments, newComment, deleteComm } =require('../../databases/dbComments')
const router = express.Router();
module.exports = router;

router.get('/', async (req, res) => {
    try {
        res.send('allOrders')
        // let postId = req.params.id_post;
        // const user = await getComments(postId)
        // if (!user.length) {
        //     res.status(401).json('No found posts')
        // } else {
        //     res.send(user)
        // }
    } catch (error) {
        res.send(error.message)
    }
})
.get('/:date', async (req, res) => {
    try {
        res.send("order-id")
        // let postId = req.params.id_post;
        // const user = await getComments(postId)
        // if (!user.length) {
        //     res.status(401).json('No found posts')
        // } else {
        //     res.send(user)
        // }
    } catch (error) {
        res.send(error.message)
    }
})
.post('/',async (req,res)=>{
    try {
        res.send('post order')
        // let postId = req.params.id_post;
        // let name=req.body.name;
        // let email=req.body.email;
        // let body=req.body.body;
        // if(!body){
        //     throw new Error("Body is required")
        // }
        // const user = await newComment(postId,name,email,body)
        // if (typeof user=== 'string') {
        //     res.json('cannot posts')
        // } else {
        //     res.send(user)
        // }
    } catch (error) {
        res.send(error.message)
    } 
})
.put('/:id_post/:id_comment',async (req,res)=>{
    try {
        res.send("put order")
        // let postId = req.params.id_post;
        // let id_comment = req.params.id_comment;
        // const user = await deleteComm(postId, id_comment)
        // if (!user) {
        //     res.status(401).json('No found posts')
        //     } else {
        //         res.send(user)
        //         }
    } catch (error) {
        
    }
})
.delete('/:id_post/:id_comment',async (req,res)=>{
    try {
        res.send("deleted id order")
        // let postId = req.params.id_post;
        // let id_comment = req.params.id_comment;
        // const user = await deleteComm(postId, id_comment)
        // if (!user) {
        //     res.status(401).json('No found posts')
        //     } else {
        //         res.send(user)
        //         }
    } catch (error) {
        
    }
})