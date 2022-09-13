interface KeyValueProcesser {
    (key:number, value:string):void;
};

function addKeyValue(key:number,value:string):void {
    console.log("addKeyValue: key = "+ key +" value = "+ value);
} 

function updateKeyValue(key:number,value:string):void {
    console.log("updateKeyValue: key ="+ key +" value = "+ value);
}

let kvp:KeyValueProcesser = addKeyValue;
kvp(1,"steve");

kvp = updateKeyValue;
kvp(2,"bill")