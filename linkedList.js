/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

 var linkedListGenerator = (function(){
  var theNode = null;

function _getHead() {
  return theNode;
}

function _getTail(){
  if (theNode === null) {
    return theNode;
  }
}

function _add(){
}

function _get(){
}

function _remove(){
}

function _insert(){
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
