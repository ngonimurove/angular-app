// jQuery introduction

// CALCULATOR
// ============
$('#addtwo').on('click', function(){
	$('#answer').hide()

	var inputA = $('#inputA').val()
	var inputB = $('#inputB').val()

	$('#answer').text(addTwo(inputA, inputB))
	$('#answer').fadeIn(1000)
})

$('#hideAnswer').click(function(){
	$('#answer').fadeOut(1500, function(){
		console.log('animation has finished!')
	})
})

// SHOW CONTENT
// ============
