/**
 * Created by zyg on 15/7/22.
 */
module.exports = {
  attributes: {
    name: {
      type: 'string',
      defaultsTo: '未命名'
    },
    avatar: {
      type: 'string',
      defaultsTo: ''
    },
    account: {
      type: 'string',
      primaryKey: true
    },
    password: {
      type: 'string'
    }
  },
  signup: function (userMessage) {

    return new Promise(function (resolve, reject) {
      var result = {
        success: true,
        message: ''
      };
      User.findOne({
        account: userMessage.account
      }).exec(function (err, user) {
        if (err) {
          throw err;
        }
        console.log('User.findOne:',user);
        if (user) {
          result.success = false;
          result.message = 'account exist';
        }
        resolve(result);
      })
    }).then(function (result) {

        return new Promise(function (resolve, reject) {
          if(result.success){

            User.create({
              account:userMessage.account,
              password:userMessage.password
            }).exec(function(err,user){
              resolve(result)
            })
          }
          resolve(result)
        });
      });
  },
  signin:function(userMessage){
    return new Promise(function(resolve,reject){
      var result = {
        success: true,
        message: ''
      };
      User.findOne({
        account: userMessage.account
      }).exec(function (err, user) {
        if (err) {
          throw err;
        }
        console.log('User.findOne:',user);
        if (user) {
          if(user.password !== userMessage.password){
            result.success = false;
            result.message = 'password isnt equal';
          }
        }else{
          result.success = false;
          result.message = 'account isnt exist';
        }
        resolve(result);
      })
    });
  }
};
