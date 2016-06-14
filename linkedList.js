/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

 var linkedListGenerator = (function(){
  var theNode = null;
  var theTail = null;
  var nodes = 0;

  var theNode2 = [null];

function _getHead() {
  console.log('head: ' + theNode);
  return theNode;
}

function _getTail(){
  console.log('theTail: ' + theTail);
  return theTail;
}

function _add(theValue){
  var newNode = {next: null};
  newNode.value = theValue;
  console.log('new node: ' + newNode);
  if(theNode === null) {
    theNode = newNode;
  } else {
    theNode.next = newNode;
  }
  nodes++;
  theTail = newNode;
  console.log('theNode.value: ' + theNode.value);
  console.log('theNode: ' + theNode);
  console.log('nodes: ' + nodes);
  return newNode;
}

function _get(theNumber){
  console.log('searching for index #' + theNumber);
  if(theNumber === 0){
    return theNode;
  }
  var nodeChunk = theNode;
  var currentNode = 0;
  while(currentNode < theNumber){
    console.log('value: ' + nodeChunk.value);
    console.log('next: ' + nodeChunk.next);
    nodeChunk = nodeChunk.next;
    currentNode++;
  }
  return nodeChunk;
}

function _remove(){
}

function _insert(){
}

//>>>>>>>> testStuff
function addToArray(theValue){
  var newItem = {value: theValue, next: null};
  if(theNode2[0] === null) {
    theNode2[0] = newItem;
  } else {
    theNode2[theNode2.length -1].next = newItem.value;
    theNode2.push(newItem);
  }
}

function renderArray(startElement){
  newArray = theNode2.slice(startElement);
  while(newArray.length > 1) {
  var lastValue = newArray.pop();
  newArray[newArray.length -1].next = lastValue;
}
return newArray[0];
}

function getArrayTail(){
  c('last item: ' + theNode2[theNode2.length - 1].value);
  return theNode2[theNode2.length - 1];
}

function getArrayHead(){
  return renderArray(0);
}


  return {
    getHead: _getHead,
    getTail: _getTail,
    add: _add,
    get: _get,
    remove: _remove,
    insert: _insert
  };

});
