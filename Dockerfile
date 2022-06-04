FROM node:lts
WORKDIR /usr/src/app

COPY . ./

# building the app
RUN yarn
RUN yarn build

# Running the app
CMD [ "npm", "start" ]
