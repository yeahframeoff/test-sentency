import logging
from aiohttp import web

async def hello(request):
    return web.Response(text="Hello, Bangkok")

app = web.Application()
app.add_routes([web.get('/_api/', hello)])

logging.basicConfig(level=logging.DEBUG)

if __name__ == "__main__":
    web.run_app(app)
