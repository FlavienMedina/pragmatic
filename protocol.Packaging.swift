protocol Packaging {
    var isOpen: Bool {get set}
    var toy: Toy? { get set }
    func open()
    func insert(toy: Toy)
}
