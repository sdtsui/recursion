// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };


//document.body
//.childNodes
//.classList

//base:
//step:
//stop:

//document.body.find()??

// But instead we're going to implement it from scratch:


/*messy log-type scratchpad
var getElementsByClassName = function(className){
	//make new html collection
	
	//if args 1, look for body
	//function (elements, className){return true or false};
	//add/don't add body
	
	//if childnodes.length >0, has children
	//htmlC.push  --- gEBCN(childNode); for each node in childNodes
	
	//return htmlC;
	var x = document.body;
	console.log(x.classList);
	
	console.log(document.body);
	console.log("classList length:")
	console.log(document.body.classList.length);
	console.log(document.body.classList[0]);
	console.log(document.body.classList);
	
	console.log(document.body.childNodes.length);
	for (nodes in document.body.childNodes){
		console.log("Type:"+typeof(document.body.childNodes[nodes]));
		console.log("Elm:"+document.body.childNodes[nodes]);
		console.log(document.body.childNodes[nodes]);
		console.log("Does this node have children?");
		console.log(document.body.childNodes[nodes].childNodes.length);
	}
	var y = document.body.childNodes[3];
	console.log("P");
	console.log(y.classList.length);
};
*/

var getElementsByClassName = function(className){
	//Base: Call traverseTree it on document.childNodes. will get all child elements in an array, including body
	//step: if an element has the class, push it to result. Call on any childNodes 
	//stop: no children
	var result = [];
	var traverseTree = function(nodeCollection){
		for (var i=0; i<nodeCollection.length; i++){
			if (_.contains(nodeCollection[i].classList, className)===true){
				result.push(nodeCollection[i]);				
			}
		if (nodeCollection[i].childNodes.length > 0){
			traverseTree(nodeCollection[i].childNodes);
		};
		};
	};
	traverseTree(document.childNodes);
	return result;

	};
//Question: 
 //When I compare result with expectedArray in spec.js, result.toString() returns (a string representing) an array with the types of each element.
 // expectedArray.toString() returns '[object HTMLCollection]'
 //How would I return a HTMLCollection if I wanted to do that?
 //I struggled with this for a long time before realizing the specs didn't require result that conformed to the HTMLCollection interface, and a plain array was fine.'
