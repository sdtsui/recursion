//You can use recursion on problems where smaller parts of the problem look the same as the larger problem as a whole.

/*
You always want to think of 3 things when you write recursive function: Base Case, Step, and Stop Condition. 
There's always a base case you need to provide so that recursion can be built up. 
Step defines how the recursion is getting reduced. 
Stop condition is a true-or-false statement that tells recursion when to stop. 
If you go with these 3 elements you should have a better time solving problem.
*/


// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	var JSON = '';
	if (obj === null){
		return 'null';
    }else if(obj === undefined){
    	return 'undefined';
    }else if (typeof(obj)==='string'){
    	//strings can also be treated as objects. one could recursively loop through each element adding characters individually
      JSON += '\"' +obj.toString()+'\"';
      return JSON;
    }else if (typeof(obj)=== 'number' || typeof(obj)=== 'boolean'){
		JSON += obj.toString();
		return JSON;
	}else if (Object.prototype.toString.call( obj ) === '[object Array]'){
      	JSON += '[';
		//alert('array');
      	//Base: array of some length, call stringify on first element
		//step: return a recursive call to array.slice(index+1);
		//stop: array of length zero, return '', let higher level calls return full string
      for (var i=0; i<obj.length; i++){
        JSON += stringifyJSON(obj[i]);
        if (i !== obj.length-1){
          JSON += ',';
        }
      }
      //could also use _.each(obj,stringifyJSON), passing the array to _.each
      JSON += ']';
      return JSON;
		
		
	}else if(Object.prototype.toString.call(obj )==='[object Object]'){
      JSON += '{'
		//alert('object');
      //Base: object with some properties, call stringify on all elements
      //step: 
      //stop: 
      
      for (var prop in obj){
      	if(typeof(obj[prop]) === 'function'){
      		//do nothing      		
      	}else if ((obj[prop] !== undefined)){
      		//console.log(typeof(obj[prop]));
      		//alert(prop.toString() + ':'+obj[prop]);
      		JSON += '\"'+prop.toString() + '\":' + stringifyJSON(obj[prop])+',';
      	}
      }
      if (JSON.length > 1){
      	//remove commas
      	JSON = JSON.slice(0,-1);
      }
      JSON += '}';
      return JSON;
	}
	
  
  
};
