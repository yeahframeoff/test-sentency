import logging
from aiohttp import web
import asyncio

async def hello(request):
    return web.Response(text="Hello, Bangkok")

async def new_text(request):
    await asyncio.sleep(1)
    data = await request.json()
    sentence = data['text']
    return web.json_response(sentence)

app = web.Application()
app.add_routes([web.get('/_api/', hello)])
app.add_routes([web.post('/_api/', new_text)])

if __name__ == "__main__":
    web.run_app(app)
