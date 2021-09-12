FROM python:3.8
ADD ../ /usr/src/app
WORKDIR /usr/src/app
EXPOSE 4000
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

#FROM node:14.9 
#COPY package*.json ./
 
#RUN npm install
 
#COPY . .
 
#EXPOSE 3000
 
#CMD [ "yarn", "start" ]
ENTRYPOINT ["python"]
CMD ["index.py"]