var l=Object.defineProperty;var i=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var s=(e,n,o)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,r=(e,n)=>{for(var o in n||(n={}))d.call(n,o)&&s(e,o,n[o]);if(i)for(var o of i(n))m.call(n,o)&&s(e,o,n[o]);return e};import{y as c,aj as f,aL as p,aM as I}from"./index.6c6182aa.js";function O(e,n){const o=/^IF-/;if(o.test(e)){const t=e.split(o)[1],a=t.slice(0,t.indexOf(" ")==-1?t.length:t.indexOf(" ")),u=t.slice(t.indexOf(" ")+1,t.length);return c({name:"FontIcon",render(){return f(p,r({icon:a,iconType:u},n))}})}else return typeof e=="function"?e:c({name:"Icon",render(){return f(I,r({icon:e},n))}})}export{O as u};
