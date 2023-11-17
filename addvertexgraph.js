class Graph {
    constructor() {
      this.vertices = new Map();
    }
  
 
    addVertex(vertex) {
      if (!this.vertices.has(vertex)) {
        this.vertices.set(vertex, []);
      }
    }
  

    addEdge(vertex1, vertex2) {
      if (this.vertices.has(vertex1) && this.vertices.has(vertex2)) {
        this.vertices.get(vertex1).push(vertex2);
        this.vertices.get(vertex2).push(vertex1);
      }
    }
  }
  
  
  const graph = new Graph();
  
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  
  graph.addEdge('A', 'B');
  graph.addEdge('B', 'C');
  graph.addEdge('C', 'D');
  
  console.log(graph.vertices);