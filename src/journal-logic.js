export function Entry(title, body) {
    this.title = title;
    this.body = body;
    this.wordCount = function(){
        var bodyArr = this.body.split(" ");
        return bodyArr.length;
    }

    this.vowelCount = function(){
        var vowels = ["a", "e", "i", "o", "u"];
        var splitBody = [];
        splitBody = this.body.split();
        var totalVowels = 0;
        
        splitBody.forEach(function (word){  

            for(var i = 0; i < word.length; i++ ){
                vowels.forEach(function (vowel) {
                    if (word[i].includes(vowel)){
                        totalVowels += 1;
                     }     
                });
            }
        });

        return totalVowels;

    }
    this.getTeaser = function(){
        var splitSentence = [];
        splitSentence = this.body.split('.');
        var splitWord = splitSentence[0].split(' ');
        var returnSentence = [];
        if(splitWord.length > 8){
            for(var i =0; i<8; i++){
                returnSentence.push(splitWord[i]);
            }
         } 
        else{
                returnSentence;
            }
        return returnSentence.join(' ');
    }
}

// another way to return wordCount if the function is not in the constructor

// Entry.prototype.wordCount = function(){
//     var bodyArr = this.body.split(" ");
//     return bodyArr.length;
//  }