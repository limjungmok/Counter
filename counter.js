function Counter(num) {
	this.num = num || 200,
	this.isActive = true;
};

var MIN_VALUE = 100;
var MAX_VALUE = 300;

Counter.prototype = {
	handleIncrement() {
		// 조건이 맞으면 +1
		++this.num;
		Counter.prototype.checkValue.call(this);
	},
	handleDecrement() {
		// 조건이 맞으면 -1
		--this.num;
		Counter.prototype.checkValue.call(this);
	},
	handleMouseUp(interval) {
		// mouseUp 이벤트 발생시 setInterval 해제
		if(interval != undefined) {
			clearInterval(interval);
		} else {
			return false;
		}
	},
	checkValue() {
		// 100미만일때 100 유지, 300초과일때 300 유지
		if(this.num < MIN_VALUE) {
			this.num = MIN_VALUE;
		} else if (this.num > MAX_VALUE) {
			this.num = MAX_VALUE;
		} else {
			return;
		}
	},
	onOff() {
		// 활성화 / 비활성화
		if(this.isActive) {
			this.isActive = false;
		} else {
			this.isActive = true;
		}
	}
};
