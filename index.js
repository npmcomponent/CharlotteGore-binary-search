module.exports = function(arr, target){

  var search = function search( low, high ){

    if( low > high ){

      return -(high);

    }

    if( arr[low] === target){
      return low;
    } else if (arr[high] === target){
      return high;
    }

    var middle = Math.floor( ( low + high ) / 2 );
    var el = arr[middle];

    if( el > target ){
      return search( low + 1, middle )
    } else if ( el < target ){
      return search( middle, high - 1 );
    }

    return middle;

  }
  
  return search( 0, arr.length-1 );

}