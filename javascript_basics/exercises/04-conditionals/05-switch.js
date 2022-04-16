/*
Take a look at the code below. Without running it, determine what it will log to
the console. If you're not sure, refer to the MDN documentation on switch
statements.
*/

let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}

// The code will log "neigh" to the console.

/*
CORRECTION: The code logged "neigh tweet tweet *cricket*" to the console
because there are no break statements.
*/