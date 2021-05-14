FROM node:alpine

RUN apk -U add vim

# set the working direction
WORKDIR /SWE-599/frontend

# add `/app/node_modules/.bin` to $PATH
ENV PATH /SWE-599/frontend/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

COPY package-lock.json ./

RUN chown -R node:node .
USER node

RUN npm ci

# add app
COPY . ./

# start app
CMD ["npm", "start"]
