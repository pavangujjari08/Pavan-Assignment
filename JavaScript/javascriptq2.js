const groupObjectsBy =[{channel:"A",name:"shoe"},{channel:"A",name:"electronics"},{channel:"B",name:"apparel"},{channel:"C",name:"electronics"},];

res = groupObjectsBy.reduce(function (r, a) {
        r[a.channel] = r[a.channel] || [];
        r[a.channel].push(a);
        return r;
    },
    Object.create(null));

console.log(res);
