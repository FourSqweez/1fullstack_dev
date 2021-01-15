function Rabbit(name, breed, color, weight) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.weight = weight;
  this.talk = function () {
    console.log(this.name + ", oung oung");
  };
}

let rabbit1 = new Rabbit("Mimi", "Lion Head", "White", 1.5);
let rabbit2 = new Rabbit("Momo", "Netherland Dwarf", "Brown", 1.2);

rabbit1.talk();
rabbit2.talk();
