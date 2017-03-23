function outerfunction(arg){
arg();
	//innerfunction
	};
	function innerfunction() {
	console.log("Hello World from Inner function");
};

//inner function is passed as argument to outer function
outerfunction(innerfunction);