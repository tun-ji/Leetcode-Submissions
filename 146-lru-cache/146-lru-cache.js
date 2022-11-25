class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.map = new Map()
    }
    
    get(key) {
        if (this.map.has(key)) {
            let value = this.map.get(key)
            this.map.delete(key)
            this.map.set(key, value)
            return value
        } else {
            return -1
        }
    }
    
    put(key, value) {
        this.map.delete(key)
        this.map.set(key, value)
        
        if (this.map.size > this.capacity) {
            this.map.delete(this.map.keys().next().value)
        }
    }
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */