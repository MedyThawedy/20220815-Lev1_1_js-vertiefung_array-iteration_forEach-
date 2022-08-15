
let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]


let myDrinks = () => {

    getraenke.forEach((item, index, arr) => {
        document.write('Index : ' + index + ' Item : ' + item + '<br>');
        console.log('Index : ' + index + ' Item : ' + item);
    });

};

myDrinks();