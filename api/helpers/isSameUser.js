// This function will validate that a user
// can only modify his data
function middleWare (req, res, next) {
  const requestedId = req.params.id.toString()
  const userId = req.user._id.toString()
  if (requestedId === userId) {
    next()
    return
  }

  res.status(401).send('Nope')
}

module.exports = middleWare
