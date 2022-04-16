// The following expression will evaluate to NaN
console.log('12' < '9');

// I was wrong. This statement evaluated to true. This is because JS evaluates
// strings character by character (so in this case it compared 1 to 9)