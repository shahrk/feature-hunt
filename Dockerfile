# pull official base image
FROM node:14

# set working directory
WORKDIR .

# add `/app/node_modules/.bin` to $PATH
EXPOSE 3000

COPY . ./
# start app
CMD ["yarn", "start"]