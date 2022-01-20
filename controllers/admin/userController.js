
// Back User Hello
exports.hello = function (req, res) {
  console.log('admin > user > hello')
  const user = 8
  res.send({ user })
}
