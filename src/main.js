import {Entry} from './journal-logic.js';

$(document).ready(function(){
    $("form#entry").submit(function(event){
        event.preventDefault();
        var title = $("#title").value();
        var body = $("#body").value();
        var newEntry = Entry(title, body);
        var result = newEntry.wordCount();
        // var wordCount = wordCount(body);
        $('#result').text(result);
    });
});