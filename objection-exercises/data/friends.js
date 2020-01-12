const casual = require('casual')
const userData = require('./users')

casual.define('friend', ({ requestorId, requestedId }) => ({
  id: casual.uuid,
  requestedId,
  requestorId,
  created_at: casual.moment,
  updated_at: casual.moment,
}))

const friends = []

for (let i = 0; i < 30; ++i) {
  const requestedId = casual.random_element(userData).id
  let requestorId = null

  do {
    requestorId = casual.random_element(userData).id
  } while (requestedId !== requestorId)

  friends.push(casual.friend({ requestorId, requestedId }))
}

module.exports = friends
