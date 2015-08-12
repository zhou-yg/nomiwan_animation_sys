/**
 * Created by zyg on 15/8/12.
 */
//重复密码检测
module.exports = function checkRepeat(req,res,next){
  var ps = req.param('password'),
      psRepeat = req.param('password');

  if(ps === psRepeat){
    next();
  }else{
    res.badRequest(false,'passwords arent same');
  }
};
