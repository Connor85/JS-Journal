import {Entry} from './journal-logic.js';
import './styles.css';

$(document).ready(function(){
    $("#entry-form").submit(function(event){
        event.preventDefault();
        var title = $("#title").val();
        var body = $("#body").val();
        var newEntry = new Entry(title, body);
        var result = newEntry.wordCount();
        var vowels = newEntry.vowelCount();
        var teaser = newEntry.getTeaser();
        $('#teaser').text(teaser);
        $('#word-count').text("The body containts " + result +" words.");
        $('#vowel-count').text("The body containts " + vowels +" vowels.");
    });
});