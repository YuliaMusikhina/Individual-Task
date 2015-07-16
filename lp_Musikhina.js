# Individual-Task
function getArray(name) 
    {
		var size = document.app.n.value;
		var str = document.getElementById(name).value;
		var rArr = str.split(',', size*size);
		var arr = new Array();
		var k = 0;
		for (var i = 0; i < size; i++) 
        {
			arr[i] = new Array();
			for (var j = 0; j < size; j++) 
				arr[i][j] = parseInt(rArr[k++]);
		}
		return arr;
	}

	function summ(a, b) 
    {
		var size = document.app.n.value;
		var arr = new Array();
		for (var i = 0; i < size; i++)
        {
			arr[i] = new Array();
			for (var j = 0; j < size; j++) 
            {
				arr[i][j] = a[i][j] + b[i][j];
			}
		}
		return arr;
	}

	function mult(a, b) 
    {
		var size = document.app.n.value;
		var arr = new Array();
		for (var i = 0; i < size; i++)
			arr[i] = new Array();
		for (var k = 0; k < size; k++) 
        {
			for (var i = 0; i < size; i++) 
            {
				var t = 0;
				for (var j = 0; j < size; j++)
					t += a[i][j] * b[j][k];
				arr[i][k] = t;
			}
		}
		return arr;
	}

	function run() 
    {
		var size = document.app.n.value;
		var arrA = getArray('a'),
		arrB = getArray('b'),
		arrC = getArray('c');
		var arrResultSumm = summ(arrA, arrB);
		console.log(arrResultSumm);
		var ArrResultMult = mult(arrResultSumm, arrC);
		console.log(ArrResultMult);
		for (var i = 0; i < size; i++) 
        {
			for (var j = 0; j < size; j++)
				document.write(ArrResultMult[i][j] + " ");
			document.write("<br>");
		}
	}
