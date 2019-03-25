(function($, _root) {


	function addComponent(container, url) {
		var a = $.get(url, function(body) {
			$div = $('<div></div>')
			$div.html(body)
			$(container).append($div)
		})
	}

	_root.addComponent = addComponent

	$.addComponent = function(c, n) {
		return addComponent(c, n)
	}


	$('[data-js-repeat]').each(function() {
		$el = $(this)
		count = $el.data('js-repeat') - 1
		$parent = $el.parent()
		for ($i = 0; $i < count; $i++) {
			$parent.append($el.clone())
		}
	})


	var navbar = function () {
		$header = $('.cool-header')
		$header.removeClass('show-sidebar')
		$('.sidebar-toggler').on('click tap', function (e) {
			e.preventDefault()
			$header.toggleClass('show-sidebar')
		})
	}

	navbar()


	var fixSlideImgHeight = function() {
		var $slide = $('.slide').first()
		var height = $slide.innerHeight()
		var width = $slide.innerWidth()

		$images = $('.slide img')
		
		$images.each(function(i, v) {
			$img = $(v)
			src = v.src
			$img.attr('src', '')
			$img.parent().css({
				"background-image": "url('" + src + "')",
				"background-size": "cover",
				"background-repeat": "no-repeat"
			})

			$img.remove()
		})
	}

	$(window).on('load', function() {
		fixSlideImgHeight()
	})


	$a = $('.questions .question-block')
	$a.addClass('closed').removeClass('open')
	$('.answer', $a).hide()
	$a.click(function(e) {
		$this = $(this)
		$this.toggleClass('open closed')
		$this.find('.answer').stop().slideToggle(200)
	})


	$('[data-go2section]').click(function(e) {
		e.preventDefault()
		$target = $(e.target.hash)
		$('html, body').animate({
			scrollTop: $target.offset().top - 70 + 'px'
		}, 500)
		window.location.hash = e.target.hash
	})


}(jQuery, window))