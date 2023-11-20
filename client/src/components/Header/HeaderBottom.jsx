import products from "../../data/products.json"

function HeaderBottom() {
  return (
    <div>
        <nav>
        <div className="navBottom">
                    <h3 className="menuItem">{products[0].name}</h3>
                    <h3 className="menuItem">{products[1].name}</h3>
                    <h3 className="menuItem">{products[2].name}</h3>
                    <h3 className="menuItem">{products[3].name}</h3>
                </div>
        </nav>
    </div>
  )
}

export default HeaderBottom