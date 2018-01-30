var list = $('ul');
var entryBox = $('#textEntry');
var submit = $('#subButton');
var trogdor = $('#trogdor');
var doodlebob = $('#doodlebob');
var listItemCounter = 0;

var addListItem = function () {
	list.append("<li>" + entryBox.val() + "</li>");
	entryBox.val('');
	entryBox.focus();
	trogdor.attr('class', 'trogdorDance');
	doodlebob.attr('class', 'doodleDance');
	setTimeout(function () {
		trogdor.attr('class', 'null');
		doodlebob.attr('class', 'null');
	}, 1200);
	list.on('dblclick', 'li', function (e) {
		$(e.target).css("text-decoration", "line-through");
		setTimeout(function () {
			$(e.target).remove();
			listItemCounter--;
		}, 1200);
	})
	listItemCounter++;

	if (listItemCounter >= 7) {
		$('li').attr('class', 'twoColumn');
	} else {
		$('li').attr('class', 'null');
	};
}

var submission = function () {
	return entryBox.val();
}

submit.on('click', function() {
	addListItem();
});

$(document).on('keydown', 'input', function(e) {
	if(e.which == 13) {
		addListItem();
		return false;
	}
});

$(function() {
	$('#sortable').sortable(); 
});




