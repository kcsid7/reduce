const extractValue = function(arr, key) {
    return arr.reduce(function(accum, curr) {
        accum.push(curr[key])
        return accum;
    }, [])
}

const vowelCount = function(str) {
    const vowels = "aeiou";
    return str.toLowerCase().split('').reduce(function(accum, cur) {
        if (vowels.indexOf(cur) !== -1){
            if (accum[cur]) {
                accum[cur]++;
            } else {
                accum[cur] = 1;
            }
        }
        return accum;
    }, {})
}

const addKeyAndValue = function(arr, key, val) {
    return arr.reduce(function(accum, cur, i) {
        accum[i][key] = val;
        return accum;
    }, [])
}

const partition = function(arr, callbck) {
    arr.reduce(function(accum, cur) {
        if (callbck(cur)) {
            accum[0].push(cur);
        } else {
            accum[1].push(cur);
        }
    }, [[],[]]);
}