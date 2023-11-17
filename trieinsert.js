// class TrieNode {
//     constructor() {
//       this.children = new Map();
//       this.isEndOfWord = false;
//     }
//   }
  
//   class Trie {
//     constructor() {
//       this.root = new TrieNode();
//     }
  
//     insert(word) {
//       let currentNode = this.root;
  
//       for (let i = 0; i < word.length; i++) {
//         const char = word[i];
  
//         // Check if the current character exists in the trie
//         if (!currentNode.children.has(char)) {
//           // If not, create a new node and add it to the trie
//           currentNode.children.set(char, new TrieNode());
//         }
  
//         // Move to the next node
//         currentNode = currentNode.children.get(char);
//       }
  
//       // Mark the last node as the end of a word
//       currentNode.isEndOfWord = true;
//     }
//     display() {
//         this._displayHelper(this.root, '');
//       }
    
//       _displayHelper(node, word) {
//         if (node.isEndOfWord) {
//           console.log(word);
//         }
    
//         for (const char in node.children) {
//           this._displayHelper(node.children[char], word + char);
//         }
//       }
//   }
  
//   // Example usage:
//   const trie = new Trie();
//   trie.insert("apple");
//   trie.insert("banana");
//   trie.insert("app");
//   trie.display();

class TrieNode {
    constructor() {
      this.children = new Map();
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let currentNode = this.root;
  
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
  
        if (!currentNode.children.has(char)) {
          currentNode.children.set(char, new TrieNode());
        }
  
        currentNode = currentNode.children.get(char);
      }
  
      currentNode.isEndOfWord = true;
    }
  
    display() {
      this.displayHelper(this.root, '');
    }
  
    displayHelper(node, word) {
      if (node.isEndOfWord) {
        console.log(word);
      }
  
      for (const [char, childNode] of node.children) {
        this.displayHelper(childNode, word + char);
      }
    }
  }
  
  // Example usage:
  const trie = new Trie();
  trie.insert("apple");
  trie.insert("banana");
  trie.insert("app");
  
  trie.display();














