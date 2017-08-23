const moment = require('moment')

const formatTimestamp = (x) => ({
  unix: (x === null) ? null : +moment.parseZone(x).format("X"),
  natural: (x === null) ? null : moment.parseZone(x).format("MMMM DD, YYYY")
})

const checkUnixTimestamp = (input) => {
  if ( !isNaN(input) ) {
    if ( moment(+input).isValid() ) {

      // Unix input
      return formatTimestamp(+input * 1000)
    }
  } else if ( moment(input).isValid() ) {

    // Human-readable format input
    return formatTimestamp(input)
  } else {

    // Invalid input
    return formatTimestamp(null)
  }
}

module.exports = checkUnixTimestamp