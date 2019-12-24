FROM python:3.8-alpine3.10

WORKDIR app

COPY requirements.txt .

RUN apk add gcc libc-dev
RUN pip install -r requirements.txt

ENV AIO_PORT=8080
CMD ["adev", "runserver", "app.py"]
