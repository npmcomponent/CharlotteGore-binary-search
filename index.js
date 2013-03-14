var Result = function(arr, target){

  this._source = arr;

  var search = function search( low, high ){

    if( low > high ){
      return [high, false];
    }

    if( arr[low] === target){
      return [low, true];
    } else if (arr[high] === target){
      return [high, true];
    }

    var middle = Math.floor( ( low + high ) / 2 );
    var el = arr[middle];

    if( el > target ){
      return search( low + 1, middle )
    } else if ( el < target ){
      return search( middle, high - 1 );
    }

    return [middle, true];

  }
  
  var result = search( 0, arr.length-1 );

  this._exact = result[1];
  this._matchingIndex = result[0];

  return this;

}

Result.prototype = {

  isExactMatch : function(){

    return this._exact;

  },

  index : function(){

    return this._matchingIndex;

  },

  value : function(){

    return this._source[this._matchingIndex];

  }

}

module.exports = function( arr, target ){

  return new Result( arr, target );

}