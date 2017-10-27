$(function(){
	var counter = new Counter();
	var $calculator = $('.calculator');

	// input value 설정
	function setInputValue(num) {
		$(this).find('._input').val(this.data.num);
	}

	$calculator.each(function(index) {
		var self = $(this);
		console.log(self);

		self.data = {
			id: index,
			num: counter.num,
			isActive: counter.isActive
		};

		// 초기 셋팅
		setInputValue.call(self);

		self.on('click', '.btn._increment', function() {
			Counter.prototype.handleIncrement.call(self.data);
			setInputValue.call(self);
		});

		self.on('mousedown', '.btn._increment', function() {
			Counter.prototype.handleMouseDown.call(self.data);
		});


		self.on('click', '.btn._decrement', function() {
			Counter.prototype.handleDecrement.call(self.data);
			setInputValue.call(self);
		});

		self.on('click', '.btn._onoff', function() {
			Counter.prototype.onOff.call(self.data);

			if(self.data.isActive) {
				// 전체 활성화
				self.children().each(function() {
					$(this).removeAttr('disabled');
				});
			} else {
				// 전체 비활성화
				self.children().each(function() {
			    $(this).attr('disabled', true);
				});
				$(this).removeAttr('disabled');
			}
		});
	});
});
