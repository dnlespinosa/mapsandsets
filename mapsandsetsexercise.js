// [1,2,3,4];

// 'ref'

// {[1,2,3] => true, [1,2,3] => false}

const hasDuplicate = (arr) => {
    let newSet = new Set(arr)
    if(newSet.size != arr.length){
        return true;
    }
    return false;
}

const vowelCount = (string) => {
    const vowels = 'aeiou';
    let vowelMap = new Map();
    for (let str of string) {
        if (vowels.indexOf(str)>=0){
            vowelMap.set(str, 1);
        }
    }
    return vowelMap;
}