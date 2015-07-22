/**
 * Created by zyg on 15/7/22.
 */
module.exports = {

  example:function(req,res){
    console.log(req.params);

    var obj = {
      name:'zhouyg',
      account:'h',
      password:'123'
    };

    /*
    User.create(obj).exec(function(err,o){
      console.log(o);
    });
    */
    User.findByAccount(obj.account).exec(function(err,o){
      console.log(o);
    });

    res.json({
      result:false
    });

  }
};
