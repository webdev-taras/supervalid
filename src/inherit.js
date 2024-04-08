module.exports = function(proto) {
  const instance = Object.create(proto)
  instance.rules = [...proto.rules]
  return instance
}