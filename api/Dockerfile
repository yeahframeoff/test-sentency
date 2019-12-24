FROM python:3.8-alpine3.10

WORKDIR app

COPY requirements.txt .

RUN apk add gcc libc-dev
RUN pip install -r requirements.txt

CMD ["python", "app.py"]