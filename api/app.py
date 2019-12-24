import logging
from aiohttp import web

async def hello(request):
    return web.Response(text="Hello, bangkok")


app = web.Application()
app.add_routes([web.get('/', hello)])

logging.basicConfig(level=logging.DEBUG)

if __name__ == "__main__":
    web.run_app(app)
