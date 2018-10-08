export function Entry(title, body) {
    this.title = title;
    this.body = body;
    this.wordCount = function(){
        var bodyArr = this.body.split(" ");
        return bodyArr.length;
    }
}

// another way to return wordCount if the function is not in the constructor

// Entry.prototype.wordCount = function(){
//     var bodyArr = this.body.split(" ");
//     return bodyArr.length;
//  }