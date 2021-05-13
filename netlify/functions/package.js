const fetch = require('node-fetch')


exports.handler = async function(event, context) {
  const [, , author, packageName, version] = event.path.split('/')
  console.log('Fetching ' + event.path);
  console.log({author, packageName, version});

  const response = await fetch(`https://package.elm-lang.org/packages/${author}/${packageName}/${version}/docs.json`)
  const docJson = await response.json()
  
  return { 
    statusCode: 200,
    body: JSON.stringify(docJson),
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age: 31540000'
    }
  }
}
