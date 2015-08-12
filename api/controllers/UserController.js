/**
 * Created by zyg on 15/7/22.
 */

module.exports = {

  register:function(req,res){

    var email = req.param('email'),
        password = req.param('password'),
        passwordRepeat = req.param('passwordRepeat'),
        result = null;

    console.log('register');
    console.log('email:',email);
    console.log('password:',password);

    User.register({
      account:email,
      password:password,
      passwordRepeat:passwordRepeat
    }).then(function(result){
      res.json(result);
    });
  },
  login:function(req,res){

    var email = req.param('email'),
      password = req.param('password');

    console.log('login');
    console.log('email:',email);
    console.log('password:',password);

    res.json({
      success:true
    })
  }
};
