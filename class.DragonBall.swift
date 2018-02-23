enum DBHeroes {
  case SANGOKU
  case BEJITA
  case BEERUS
  case KAMESENNIN
}

class DragonBall: Figurine{
  private let _character: DBHeroes

  var type: String

  func isMoved(){
    print("Kamé Hamé Ha!")
  }

  init(_ _character: DBHeroes){
    self._character = _character
    type = "Dragon Ball figurine \(_character)"
    print("\(self._character) is singing -->\nCHA-LA HEAD CHA-LA Nani ga okite mo kibun wa heno-heno kappa\nCHA-LA HEAD CHA-LA Mune ga pachi-pachi suru hodo Sawagu Genki-Dama --Sparking !\n")
  }
}
