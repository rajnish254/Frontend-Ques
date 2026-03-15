function doubleEqualPolyfill (a,b){
    if(typeof a === typeof b) return a ===b;
    if(a === null && b === undefined) return true;
    if(a === undefined && b === null) return true;

    if(typeof a ==="object"){
        return abstractEquality(String(a),b)
    }
     if(typeof b ==="object"){
        return abstractEquality(String(b),a)
    }
    return Number(a)===Number(b);
}

console.log(doubleEqualPolyfill([],{}));
console.log(doubleEqualPolyfill(1,1));
