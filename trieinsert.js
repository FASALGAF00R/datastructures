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
}

const a=new trie()
a.insert("dhfkj")
a.insert('uuu')
a.display()