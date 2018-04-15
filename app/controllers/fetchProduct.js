function fetchProducts(req, res) {
  process.dbModel.findAll({limit: 10}).then((result) => {
       console.log(result.length);
       res.json(result.length);
  })
}
module.exports = {
  fetchProducts: fetchProducts
}
