$('form').submit(function(event){
	event.preventDefault();
	//console.log($(this).serialize());
	
	$.ajax({

		type:'POST',
		url: 'api/cotizaciones',
		data: $(this).serialize(),
		
		success:function(data){
			console.log(data);
			var row = '<tr>';
				row += '<td>' + data[0].id;
				row += '<td>' + data[0].moneda;
				row += '<td>' + data[0].compra;
				row += '<td>' + data[0].venta;
				$('table tbody').append(row);
		$('form').trigger('reset');
			
		},

		error:function(){
			console.log('error Ajax');

		}

	});
});


$('table').ready(function(){

	$.ajax({
		type: 'GET',
		url: 'api/cotizaciones',

		success: function(data){
			//console.log(data);

			for (var i = 0; i < data.length; i++) {
				debugger;
				var row = '<tr>';
				row += '<td>' + data[i].id;
				row += '<td>' + data[i].moneda;
				row += '<td>' + data[i].compra;
				row += '<td>' + data[i].venta;
				$('table tbody').append(row);	
			}

		},
		error: function(){

			console.log('error al cargar datos')
		}

	});

});