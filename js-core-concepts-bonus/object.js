const nayok = {
    name: "Shakib Khan",
    id: 121,
    address: "moive cinema",
    isSingle: true,
    friends: ['Apu', 'Raaz', 'Salman', 'Amir'],
    act: function () {
        console.log("acting like Sakib Khan.");
    },
    car: {
        brand: 'tesla',
        price: 50000000,
        made: 2025,
        manufacturer: {
            name: 'tesla',
            ceo: 'Elon Mask',
            country: 'USA',
        }
    }
}

// console.log(student.car.manufacturer)
console.log(nayok.act);
nayok.act();