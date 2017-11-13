$(function(){
	var counter = new Counter();
	var $calculator = $('.calculator');

	function hasClass(target, className) {
    return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
	}

	// input value 설정
	function setInputValue(num) {
		$(this).find('._input').val(this.data.num);
	}

	function handleIncrement(self) {
		Counter.prototype.handleIncrement.call(self.data);
		setInputValue.call(self);
	}

	function handleDecrement(self) {
		Counter.prototype.handleDecrement.call(self.data);
		setInputValue.call(self);
	}

	$calculator.each(function(index) {
		var self = $(this);

		self.data = {
			id: index,
			num: counter.num,
			isActive: counter.isActive,
			timeout: null,
			interval: null
		};

		// 초기 셋팅
		setInputValue.call(self);

		// 플러스 버튼
		self.on('click', '.btn._increment', function() {
			handleIncrement(self);
		});

		// 마이너스버튼
		self.on('click', '.btn._decrement', function() {
			handleDecrement(self);
		});

		// 마우스 press 버튼 누르는동안
		self.on('mousedown', '.btn', function() {
			if(hasClass(this, '_increment')) {
				// + 버튼 눌렀을경우에만

				this.interval = setInterval(function() {
					handleIncrement(self);
				}, 100);
			} else if (hasClass(this, '_decrement')) {
				// - 버튼 눌렀을경우에만

				this.interval = setInterval(function() {
					handleDecrement(self);
				}, 100);
			} else {
				return false;
			}
		});

		// 마우스 press 버튼 뗏을 때
		self.on('mouseup', '.btn', function() {
			Counter.prototype.handleMouseUp.call(self, this.interval);
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
