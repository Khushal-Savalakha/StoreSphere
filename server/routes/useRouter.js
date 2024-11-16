const router=require('express').Router();
const userCtrl=require('../controllers/userCtrl')
/*router.post('/register',(req,res)=>{
    res.json({
        message:'register'
    })
})*/

router.post('/register',userCtrl.register)
router.post('/refreshtoken',userCtrl.refreshtoken)

module.exports=router
