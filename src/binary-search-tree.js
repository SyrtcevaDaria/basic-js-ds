const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor(){
    this.myRoot = null
  }
  root() {
    return this.myRoot
  }
  helpAddFunction(node, data){
    if(node==null){
      return new Node(data)
    }
    if(node.data == data){
      return 
    }
    if(node.data<data){
      node.right = this.helpAddFunction(node.right, data)
    }
    else{
      node.left = this.helpAddFunction(node.left, data)
    }
    return node
  }
  add(data) {
    this.myRoot = this.helpAddFunction(this.myRoot, data)
  }

  has( data) {
    let node = this.myRoot
    while(node!==null){
      if(node.data>data){
        node=node.left
      }
      else if(node.data<data){
        node=node.right
      }
      else{
        return true
      }
    }
    return false
  }

  find(data) {
    let node = this.myRoot
    while(node!==null){
      if(node.data>data){
        node=node.left
      }
      else if(node.data<data){
        node=node.right
      }
      else{
        return node
      }
    }
    return null
  }
  helpRemoveFunction(node, data){
    if(!node){
      return;
    }
    if(node.data<data){
      node.right = this.helpRemoveFunction(node.right, data)
      return node
    }
    else if(node.data>data){
      node.left = this.helpRemoveFunction(node.left, data)
      return node
    }
    else{
      if(!node.left && !node.right){
        return null
      }
      else if(!node.left){
        node = node.right
        return node
      }
      else if(!node.right){
        node=node.left
        return node
      }
      else{
        let minRight = node.right
        while(minRight.left){
          minRight=minRight.left
        }
        node.data = minRight.data
        node.right = this.helpRemoveFunction(node.right,node.data )
        return node
      }
    }
  }
  remove(data) {
    if(!this.myRoot){
      return 
    }
    this.myRoot = this.helpRemoveFunction(this.myRoot, data)
    console.log(this.myRoot)
  }

  min() {
    if(this.myRoot==null){
      return
    }
    let minVal = null
    let node = this.myRoot
    while(node!==null){
      minVal = node.data
      node = node.left
    }
    return minVal
  }

  max() {
    if(this.myRoot==null){
      return
    }
    let maxVal = null
    let node = this.myRoot
    while(node!==null){
      maxVal = node.data
      node = node.right
    }
    return maxVal
  }
}

module.exports = {
  BinarySearchTree
};