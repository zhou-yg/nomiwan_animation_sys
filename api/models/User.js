/**
 * Created by zyg on 15/7/22.
 */
module.exports = {
  attributes:{
    uid:{
      type:'integer',
      primaryKey:true,
      autoIncrement:true,
      defaultsTo:0
    },
    name:{
      type:'string'
    },
    account:{
      type:'string'
    },
    password:{
      type:'string'
    }
  }

};
