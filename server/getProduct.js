const products = require('../products.json');


const getProduct = (req, res) => {

    const item = products.find((item) => item.id === +req.params.id)
        if (!item){
            return res.status(500).send("Item not in list")
        }
        res.status(200).send(item)
        console.log(item)
}

module.exports = getProduct;

// if (req.query.first_name){
//     const filteredUsers = users.filter(user => user.first_name === req.query.first_name);
//     res.json(filteredUsers);
// } else {
//     // res.json(users);
//     res.status(406).json("You must provide a first_name")
