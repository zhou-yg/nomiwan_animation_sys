/**
 * Created by zyg on 15/7/22.
 */
module.exports = {
  attributes:{
    name:{
      type:'string'
    },
    avatar:{
      type:'string',
      defaultsTo:''
    },
    account:{
      type:'string',
      primaryKey:true
    },
    password:{
      type:'string'
    }
  }
};
