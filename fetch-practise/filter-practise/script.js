const ages = [12,18,21,15,30];

const old=ages.filter(age=>age>=18);
console.log(old);

const prices = [100,500,800,1200,150];
const hign=prices.filter(price=>price>500);

const players = [
    "Messi",
    "Ronaldo",
    "Neymar",
    "Mbappe"
];

const lar=players.filter(player=>player.length>6);
console.log(lar);