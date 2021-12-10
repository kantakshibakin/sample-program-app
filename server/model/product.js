
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
//   author: ObjectId,
coverimage:String,
name: { type:String, required:true, max:[60,'最大60文字までです'] },
price: Number,
description:String,
title1: String,
description1:String,
title2: String,
description2: String,
title3:String,
description3: String,
});

module.exports = mongoose.model('Product', ProductSchema)