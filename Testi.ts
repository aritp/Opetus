interface Pointlike {
    x: number;
    y: number;
}

interface Named {
    name: string;
}

function logPoint(point: Pointlike){
    console.log("x = " + point.x + ", y = " + point.y);
}

function logName(x: Named){
    console.log("Tervehdys " + x.name);
}

console.log("Tervehdys!");

const obj = {
    x: 10,
    y: 3,
    name: "Siirtymä"
}

logPoint(obj);
logName(obj);

console.log("Valmista tuli ja päästiin loppuun asti");