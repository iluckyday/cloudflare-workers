addEventListener("fetch",event => {
  let url=new URL(event.request.url);
  let request=new Request(url,event.request);
  event.respondWith(
    new Response(JSON.stringify(event), { status: 200 })
  )
});
