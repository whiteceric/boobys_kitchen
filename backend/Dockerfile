FROM python:3
ENV PYTHONUNBUFFERED 1

WORKDIR /app/backend
COPY requirements.txt ./
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN pip install gunicorn

COPY . ./