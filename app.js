$(function(){

	var Person = function(){

		 this.name = $('#nameInput').val();
		 this.seats = $('#selectedSeat').text();
		 this.date = $('#dateInput').val();
		 this.message = $('#messageInput').val();

	}

	var button = $('#reserve-btn');

	var seatNumber = [];

	for(var i=1; i<=24; i++){
		seatNumber.push(i);
		$(".seat-chart").append(function(){
			return "<div class='available'><h3>" + i + "</h3></div>";
		})
	}

	var seatArray = [];

	$(".available").on("click", function(){

		var self = this;
		var seatIndex = $(this).text();
		var seatBox;

		(function() {

			(function(){

			$(self).toggleClass('reserved');

			})();
		
			var x = seatArray.indexOf(seatIndex);
			if ( x === -1) {
				seatArray.push(seatIndex);
				
			}
			else {
				seatArray.splice(x, 1);
				
			}

			seatBox = seatArray.join(", ");

			$('#selectedSeat').text(seatBox);

		})();

	});

	button.on('click', function() {

		var guest = new Person();

		$('#nameInput').val('');
		$('#selectedSeat').val('');
		$('#dateInput').val('');
		$('#messageInput').val('');
		
	});
})






