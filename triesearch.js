class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }

    insert(word) {
      let currentNode = this.root;
  
      for (let char of word) {
        if (!currentNode.children[char]) {
          currentNode.children[char] = new TrieNode();
        }
        currentNode = currentNode.children[char];
      }
  
      currentNode.isEndOfWord = true;
    }
  
    search(word) {
      let currentNode = this.root;
  
      for (let char of word) {
        if (!currentNode.children[char]) {
          return false;
        }
        currentNode = currentNode.children[char];
      }
  
      return currentNode.isEndOfWord;
    }
  }
  
  
  const trie = new Trie();
  trie.insert("apple");
  trie.insert("banana");
  trie.insert("cat");
  
  console.log(trie.search("apple")); 
  console.log(trie.search("banana")); 
  console.log(trie.search("cat")); 
  console.log(trie.search("dog")); 
  