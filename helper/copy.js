function copy(obj) {
    if (typeof obj !== 'object' ||
        obj === null ||
        obj instanceof HTMLElement
    )
        return obj; // primitive value or HTMLElement

    if (obj instanceof Date) 
        return new Date().setTime(obj.getTime());

    if (obj instanceof RegExp) 
        return new RegExp(obj.source, obj.flags);


    const result = obj instanceof Array ? [] : {};

    if (obj instanceof Array) {
        for(const o of obj) {
             result.push(copy(o));
        }
        return result;
    }

    const keys = Object.keys(obj); 

    for (const key of keys)
        result[key] = copy(obj[key]);

    return result;
}