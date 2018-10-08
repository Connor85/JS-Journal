function Entry(title, body) {
    this.title = title;
    this.body = body;
    this.wordCount = function(){
        var bodyArr = this.body.split(" ");
        return bodyArr.length;
    }
}

 var mel = new Entry("mel","gibson gibson");
mel.wordCount();

// another way to return wordCount if the function is not in the constructor

// Entry.prototype.wordCount = function(){
//     var bodyArr = this.body.split(" ");
//     return bodyArr.length;
//  }