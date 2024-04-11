const arr = [5, 2, 3, 2, 8, 1]

function mergesort(arr) {
    if (arr.length <= 1) {
        return arr
    } 
        let mid = Math.floor(arr.length / 2)
        const left = arr.slice(0, mid)
        const right = arr.slice(mid)

        return check(mergesort(left), mergesort(right))

    
    function check(left, right) {
        let res = []
        while(left.length && right.length){

            if (left[0] <= right[0]) {
                res.push(left.shift())
            } else {
                res.push(right.shift())
            }
        }
        return [...res, ...left, ...right]
    }
}

const ll=mergesort(arr)
console.log(ll);