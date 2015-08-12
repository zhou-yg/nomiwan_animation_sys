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
  register: function (userMessage) {

    return new Promise(function (resolve, reject) {
      var result = {
        success: true,
        message: ''
      };
      User.find({
        account: userMessage.account
      }).exec(function (err, user) {
        if (err) {
          throw err;
        }
        if (user && user.length > 0) {
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
  }
};
