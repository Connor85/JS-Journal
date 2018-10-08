var Entry = {
    title: " ",
    body: " ",
    wordCount: function(body){
       var bodyArr = body.split(" ");
       return bodyArr.length;
    }
}

function Entry(title, body) {
    this.title = title;
    this.body = body;
}

Entry.prototype.wordCount = function(){
    var bodyArr = this.body.split(" ");
    return bodyArr.length;
 }