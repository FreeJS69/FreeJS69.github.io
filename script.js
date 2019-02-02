$(document).ready(function() {
    'use strict';

    $.get("http://yandex.ru", function(data) {
		
			var content = $('.container container__first container__line', data).html();
			
			$("#result").html(content);
			
		});



    });