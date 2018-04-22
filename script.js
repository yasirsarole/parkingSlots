$(document).ready( function() {

	// retrieve values from database
	function getValues() {
	  $.ajax({    
	    type: "POST",
	    url: "parkingSlots.php",
			success: function(data) {
				var obj = $.parseJSON(data);
				var result = $.map(obj, function(el) { return el });
				slot1 = result[1], slot2 = result[2], 
				slot3 = result[3], slot4 = result[4], 
				slot5 = result[5], slot6 = result[6], 
				slot7 = result[7], slot8 = result[8], 
				slot9 = result[9], slot10 = result[10]		
    	}                    
		});						
	}

	// display slots availability
	function slotsAvailability() { 
		if ( slot1 == 1) {
			$('#slot1').removeClass('full');
			$('#slot1').addClass('available');
		} else {
			$('#slot1').removeClass('available');
			$('#slot1').addClass('full')
		}
		if ( slot2 == 1) {
			$('#slot2').removeClass('full');
			$('#slot2').addClass('available');
		} else {
			$('#slot2').removeClass('available');
			$('#slot2').addClass('full')
		}
		if ( slot3 == 1) {
			$('#slot3').removeClass('full');
			$('#slot3').addClass('available');
		} else {
			$('#slot3').removeClass('available');
			$('#slot3').addClass('full')
		}
		if ( slot4 == 1) {
			$('#slot4').removeClass('full');
			$('#slot4').addClass('available');
		} else {
			$('#slot4').removeClass('available');
			$('#slot4').addClass('full')
		}
		if ( slot5 == 1) {
			$('#slot5').removeClass('full');
			$('#slot5').addClass('available');
		} else {
			$('#slot5').removeClass('available');
			$('#slot5').addClass('full')
		}
		if ( slot6 == 1) {
			$('#slot6').removeClass('full');
			$('#slot6').addClass('available');
		} else {
			$('#slot6').removeClass('available');
			$('#slot6').addClass('full')
		}
		if ( slot7 == 1) {
			$('#slot7').removeClass('full');
			$('#slot7').addClass('available');
		} else {
			$('#slot7').removeClass('available');
			$('#slot7').addClass('full')
		}
		if ( slot8 == 1) {
			$('#slot8').removeClass('full');
			$('#slot8').addClass('available');
		} else {
			$('#slot8').removeClass('available');
			$('#slot8').addClass('full')
		}
		if ( slot9 == 1) {
			$('#slot9').removeClass('full');
			$('#slot9').addClass('available');
		} else {
			$('#slot9').removeClass('available');
			$('#slot9').addClass('full')
		}
		if ( slot10 == 1) {
			$('#slot10').removeClass('full');
			$('#slot10').addClass('available');
		} else {
			$('#slot10').removeClass('available');
			$('#slot10').addClass('full')
		}						
	}
	setInterval(getValues, 2000);
	setInterval(slotsAvailability, 3000);
});