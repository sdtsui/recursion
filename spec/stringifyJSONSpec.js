// test cases are described in fixtures.js
describe('stringifyJSON', function(){
  it('should match the result of calling JSON.stringify', function(){
  	//alert('stringifiable:');
	//alert(stringifiableObjects);
    stringifiableObjects.forEach(function(test){
      var result = stringifyJSON(test);
      var expected = JSON.stringify(test);
      expect(result).to.equal(expected);
    });
	//alert(unstringifiableValues);
    unstringifiableValues.forEach(function(obj){
      var result = stringifyJSON(obj);
      var expected = JSON.stringify(obj);
      expect(result).to.equal(expected);
    });

  });
});
