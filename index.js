const urls = require('./urls.json')

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const path = new URL(request.url).pathname.substring(1)
  console.log(request.headers['user-agent'], new Date(), path)
  if (path in urls)
    return new Response(null, {
      status: 308,
      headers: { location: urls[path] },
    })
  else
    return new Response(
      `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>DF Community URL Shortner</title>
        </head>
        <body>
          404 not found !! Check all possible at
          https://links.dfcommunity.win/all-urls
        </body>
      </html>
    `,
      {
        status: 404,
        headers: { 'content-type': 'text/html' },
      },
    )
}
