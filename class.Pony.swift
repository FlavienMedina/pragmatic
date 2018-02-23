class Pony: Toy {
 static private var _nb: Int = 1
 var id: Int = _nb
 var type: String = "Pony #"
 init() {
   print ("\(self.type)\(self.id) is singing -->\nDou-double poney, j'fais izi money \nD'où tu m'connais ? Parle moi en billets violets \nDou-double poney, j'fais izi money")
   Pony._nb += 1
 }
 func isMoved(){
   print("Huuuuuuhu!")
 }

}
