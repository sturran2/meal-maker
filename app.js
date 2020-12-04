const menu={
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get courses() {
   return {
     appetizers: this.appetizers,
     mains: this.mains,
     desserts: this.desserts,
   } 
  },
  get appetizers() {
      return this._courses.appetizers
  },
  get mains(){
    return this._courses.mains
  },
  get desserts(){
    return this._courses.desserts
  },
  set appetizers(appetizerIn){
    this._courses.appetizers = appetizerIn
  },
   set mains(mainsIn){
    this._courses.mains = mainsIn
  },
    set desserts(dessertsIn){
    this._courses.desserts = dessertsIn
  },
  addDishToCourse(courseName, dishName, dishPrice){
    dish={
      name:dishName,
      price:dishPrice
    }
    this._courses[courseName].push(dish)
  },
  getRandomDishFromCourse(courseName){
    let dishes=this.courses[courseName]
    return dishes[Math.floor(Math.random()*(dishes.length))]
  },
  generateRandomMeal(){
    let appetizer=this.getRandomDishFromCourse('appetizers')
    let main=this.getRandomDishFromCourse('mains')
    let dessert=this.getRandomDishFromCourse('desserts')
  let totalPrice=appetizer.price+main.price+dessert.price
  return `Your meal is ${appetizer.name} for an appetizer, ${main.name} for the main course, and ${dessert.name} for dessert. The total price is ${totalPrice}.`
  
  }
}





menu.addDishToCourse('mains', 'Tacos', 8.99)
menu.addDishToCourse('mains', 'Tamales', 4.99)
menu.addDishToCourse('mains', 'Tikka Masala', 18.99)

menu.addDishToCourse('appetizers', 'bacon wrapped dates', 5)
menu.addDishToCourse('appetizers', 'pork belly', 0.01)
menu.addDishToCourse('appetizers', 'cheese curds', 10)

menu.addDishToCourse('desserts', 'ice cream', 3)
menu.addDishToCourse('desserts', 'churro', 2)
menu.addDishToCourse('desserts', 'flan', 4)

meal=menu.generateRandomMeal()
console.log(meal)

