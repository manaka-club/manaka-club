"use strict";
var os  = require("os");
var dealImg;
if (os.arch() == "x64"){
    dealImg = require('../bin/x64/dealImg');
}
else if(os.arch() == "ia32"){
    dealImg = require('../bin/ia32/dealImg');
}
else {
    throw new Error("not support this os!");
}
var iconv = require('iconv-lite');
var effects = require('./effects');
module.exports = Img;
 function Img(){
    this.img = new dealImg();
}
Img.prototype.cut = function(){
    var self = this;
    switch (arguments.length){
        case 3:
            self.img.cut(arguments[0],arguments[1],0,0,arguments[2]);
            break;
        case 5:
            self.img.cut(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);
            break;
        default:
            break;
    }
};
Img.prototype.load = function(path){
    var self = this;
    if (!path)
     throw new Error(" Invalid parameter");
    self.img.load(iconv.encode(path,'utf16-be'));
};
Img.prototype.effect = function(effect,args,cb){
    var self = this,effNum = -1;
    if (!effect)
         throw new Error(" Invalid parameter");
    if(!effects[effect]){
        throw new Error(" Invalid parameter")
    }
    effNum = effects[effect];
    var run = "self.img.effect(" + effNum;
    for(var i = 0 ;i<args.length;i++){
        run += ','+args[i];
    }
    run += ","+function(da){
            cb(da)
        };
    run += ");"
    eval(run);
};
Img.prototype.save = function(path,quality){
    var self = this;
    if (!path)
     throw new Error(" Invalid parameter");
    if (!quality)
        quality = -1;
    self.img.save(iconv.encode(path,'utf16-be'),parseInt(quality));
};
Img.prototype.drawText = function(){
    var self = this;
    var leng = 0;
    if (arguments.length<2||typeof(arguments[0])!="string"||typeof(arguments[arguments.length-1])!="function"){
         throw new Error(" Invalid parameter");
    }
    var textArgs = {
        text:iconv.encode(arguments[0],"GBK")
        ,font : iconv.encode("微软雅黑","GBK")
        ,size :  30
        ,location : [0,0]
        ,rgb:[0,0,0]
        ,cb : arguments[arguments.length-1]
    };
    for(var i = 1;i<arguments.length - 1;i++){
        if (arguments[i] instanceof Array){
            arguments[i].length == 2 ? textArgs.location = arguments[i] : textArgs.rgb = arguments[i];
        }
        else if (typeof arguments[i] == "string"){
            textArgs.font = iconv.encode(arguments[1],"GBK");
        }
        else if (typeof arguments[i] == "number"){
            textArgs.size = parseInt(arguments[i]);
        }
    }
   self.img.drawText(textArgs.text,textArgs.font,textArgs.size,textArgs.location[0],textArgs.location[1],textArgs.rgb[0],textArgs.rgb[1],textArgs.rgb[2],textArgs.cb);
};


