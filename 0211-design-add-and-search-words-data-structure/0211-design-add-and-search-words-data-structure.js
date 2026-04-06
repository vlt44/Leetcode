
var WordDictionary = function() {
    this.trie = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.trie;
    
    for (let char of word) {
        if (node[char] == null) node[char] = {};
        node = node[char];
    }

    node.isEnd = true;
};

WordDictionary.prototype.dfs = function(word, trie, index) {
    if (word.length === index) {
        return trie.isEnd ? true : false; 
    }

    let char = word[index]

    if (char === ".") {
        for (let key in trie) {
            if (this.dfs(word, trie[key], index + 1)) return true;
        }
    } else {
        if (trie[char] != null) {
            return this.dfs(word, trie[char], index + 1);
        }
    }

    return false;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return this.dfs(word, this.trie, 0);
};






/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */