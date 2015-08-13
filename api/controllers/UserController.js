/**
 * Created by zyg on 15/7/22.
 */

module.exports = {

  signup:function(req,res){

    var email = req.param('email'),
        password = req.param('password'),
        passwordRepeat = req.param('passwordRepeat');

    console.log('register:');
    console.log('email:',email);
    console.log('password:',password);

    User.signup({
      account:email,
      password:password,
      passwordRepeat:passwordRepeat
    }).then(function(result){
      res.json(result);
    });
  },
  signin:function(req,res){

    var email = req.param('email'),
      password = req.param('password');

    console.log('login:');
    console.log('email:',email);
    console.log('password:',password);

    User.signin({
      account:email,
      password:password
    }).then(function(result){
      res.json(result);
    });
  }
};
