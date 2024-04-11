class trienode{
  constructor(){
    this.child=new Map()
    this.endword=false
  }
}

class trie{
  constructor(){
    this.root=new trienode()
  }
  insert(word){
    let currnode=this.root
    for(let i=0;i<word.length;i++){
      let char=word[i]
      if(!currnode.child.has(char)){
        currnode.child.set(char,new trienode())
      }
      currnode=currnode.child.get(char)
    }
    currnode.endword=true
  }
  display(){
    this.displayhelper(this.root,'')
  }
  displayhelper(node,word){
    if(node.endword){
      console.log(word);
    }
    for(const [char,childnode]of node.child){
      this.displayhelper(childnode,char+word)
    }
  }


  autocomplete(prefix) {
    let currnode = this.root;

    // Traverse to the node representing the prefix
    for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i];

        if (!currnode.child.has(char)) {
            // Prefix not found, return empty array
            return [];
        }
        currnode = currnode.child.get(char);
    }

    // Collect all words starting with the prefix
    const words = [];
    this.collectWords(currnode, prefix, words);
    return words;
}

collectWords(node, prefix, words) {
    // If the current node marks the end of a word, add it to the result
    if (node.endword) {
        words.push(prefix);
    }

    // Recursively collect words from all child nodes
    for (const [char, childNode] of node.child) {
        this.collectWords(childNode, prefix + char, words);
    }
}





}

const a=new trie()
a.insert("dhfkj")
a.insert('uuu')
a.insert('uggu')
a.insert('uhhhu')
a.insert('ul')

// a.display()
console.log("\nAutocomplete suggestions for 'do':");

console.log(a.autocomplete("u"));

