$(document).ready(
	function(){
		// LOading
		$('#principal').hide()
		setTimeout(
			function(){
				$('#principal').fadeIn()
				$('.content__loading').fadeOut()
			}, 300
		)
		// $('#btnMenu').on('click', 
		// 	function(){
		// 		$('.content__menu__resp').addClass('show')
		// 	}
		// )


		// MEnu responsive
		$('#btnMenu').on('click', 
			function(){
				if($(this).hasClass('active')){
					$(this).removeClass('active')
					$('.menu__responsive--is-icon').text('menu')
					$('.content__menu__resp').slideUp()
				}else{
					$(this).addClass('active')
					$('.menu__responsive--is-icon').text('clear')
					$('.content__menu__resp').slideDown()	
				}				
			}
		)


		// Agregar y quitar clase
		$('.btn--is-contacto').on('click', function(){
			$(this).toggleClass('active')
		})


	}
)