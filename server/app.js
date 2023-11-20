const express = require('express')
var bodyParser = require('body-parser')
 
// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express()
var cors = require('cors')
const port = 3001

app.use(cors());
let products = [
  {
      code: 1,
      name: "AIR JORDAN",
      price: 14999,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sequi!",
      longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores doloremque id, quam labore repellat ipsam nesciunt sed nam? Consectetur eveniet nostrum dolorum, quod in quidem sit blanditiis et laudantium soluta!"
  },
  {
      code: 2,
      name: "AIR FORCE 1",
      price: 9999,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sequi!",
      longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores doloremque id, quam labore repellat ipsam nesciunt sed nam? Consectetur eveniet nostrum dolorum, quod in quidem sit blanditiis et laudantium soluta!" 
  },
  {
      code: 3,
      name: "JORDAN MJ 23",
      price: 6999,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sequi!",
      longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores doloremque id, quam labore repellat ipsam nesciunt sed nam? Consectetur eveniet nostrum dolorum, quod in quidem sit blanditiis et laudantium soluta!"
  },
  {
      code: 4,
      name: "AIR MAX",
      price: 6999,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sequi!",
      longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores doloremque id, quam labore repellat ipsam nesciunt sed nam? Consectetur eveniet nostrum dolorum, quod in quidem sit blanditiis et laudantium soluta!"
  }
]
let cart = [{code: 1, quantity: 1}, {code: 2, quantity: 3}];
app.get('/', (req, res) => {
  console.log("/ invoked");
  res.send('Hello World!')
})

app.get('/cart-fet', (req,res) => {
  console.log("/products invoked");
  res.send(JSON.stringify(cart));
})

app.post('/update-cart', jsonParser, (req, res) => {
  const updatedCart = req.body;
  console.log(req.body);
  cart = updatedCart;
  console.log(cart);
  res.status(200).json({ message: 'Cart updated successfully' });
});

app.post('/add-to-cart', jsonParser, (req, res) => {
  const newItem = req.body;
  let a = false;
  for(let i in cart){
    if(cart[i].code == newItem.code){
      cart[i].quantity++;
      a = true;
    }
  }
  if( a === false){
    cart.push({code: newItem.code, quantity: 1});
  }
  console.log(cart)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})