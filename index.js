const nodevu = require('@nodevu/core')

const staticNow = require('./now.json')
const now = JSON.parse(staticNow)

async function test () {
  const data = await nodevu()
  console.log(data)
}

test()