# binary-search

  A binary search algorithm for finding values in sorted arrays.

## Installation

    $ component install charlottegore/binary-search

## API

  Takes an array and a target to search for

    > var arr = [1,2,3,4,6,7,8];
    > require('binary-search')(arr, 3);
    > [2, true]
    
  When the target is found, it returns the index of the target and 'true'.  
  
    > require('binary-search')(arr, 5);
    > [4, false]
    
  When the target isn't found, it returns the index the target value could be inserted at and 'false'.
    

## License

  MIT
