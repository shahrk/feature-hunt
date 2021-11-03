FROM python:3.8
COPY ./requirements.txt /usr/src/app/requirements.txt
WORKDIR /usr/src/app
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
COPY . /usr/src/app
EXPOSE 5000
ENTRYPOINT ["python"]
CMD ["index.py"]