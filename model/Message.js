//一对一消息表
const mongoose = require('mongoose');
const db = require('../config/db');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  userID: {//用户id(发送方id)
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  friendID: {//好友id(接收方id)
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  message: {//内容
    type: String
  },
  time2: {  // 如果是语音就存语音的秒数
    type: String,
  },
  types: {//内容类型(0：文字，1：图片链接，2：音频链接)
    type: String,
  },
  time: {//发送时间
    type: Date,
  },
  imgurl: {//接收状态(0已读，1未读)
    type: String,
  },
  tip: {  // 未读消息数
    type: Number,
    default: 0,
  }
});

module.exports = db.model('Message', MessageSchema);