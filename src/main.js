import {Entry} from './journal-logic.js';

$(document).ready(function(){
    $("#entry-form").submit(function(event){
        event.preventDefault();
        var title = $("#title").val();
        var body = $("#body").val();
        var newEntry = new Entry(title, body);
        var result = newEntry.wordCount();
        // var wordCount = wordCount(body);
        $('#result').text(result);
    });
});