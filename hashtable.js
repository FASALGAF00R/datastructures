class HashTable {
    constructor(size = 10) {
        this.size = size;
        this.buckets = new Array(size).fill(null).map(() => []);
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value; // Update value if key already exists
                return;
            }
        }
        bucket.push([key, value]); // Insert new key-value pair
    }



}

const hash=new HashTable()

hash.set("apple",10)
hash.set("banana",20)
hash.set("pine",30)


console.log(hash.get('apple'));
console.log(hash.get('banana'));
console.log(hash.get('pine'));