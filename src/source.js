const a = {
    name:'Oscar',
    reversed : () => a.name.split("").reverse().join("") 
}

const b = `Mi nombre es ${a.name} y al revés es ${a.reversed()}`



console.log(a.reversed);
console.log(a.name);