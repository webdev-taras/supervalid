module.exports = (is) => {
  is.any = require("./any")
  is.boolean = require("./boolean")
  is.number = require("./number")
  is.string = require("./string")
  is.array = require("./array")
  is.object = require("./object")
  is.function = require("./function")
  is.regexp = require("./regexp")
  is.bigint = require("./bigint")
  is.date = require("./date")
  is.integer = require("./integer")
  is.float = require("./float")
}
