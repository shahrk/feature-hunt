# pull official base image
FROM node:14
COPY ./package.json /usr/src/app/package.json
# set working directory
WORKDIR /usr/src/app
# install dependencies first so that they can be cached
RUN npm install
EXPOSE 3000
# copy the code
COPY . ./
# start app
ENTRYPOINT ["yarn"]
CMD ["start"]