/**
 * Created by zyg on 15/7/22.
 */

module.exports = {

  //HTTP POST 创建一个用户
  create:function(req,res){

    var account = req.param('account'),
        password = req.param('password');

    res.json({
      account:account,
      password:password
    });
  }
};
