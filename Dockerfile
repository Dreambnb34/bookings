# 5MB vs 650MB with full node.js image
FROM node:8.12-alpine

EXPOSE 3000

ENV NODE_VERSION 6.14.4

RUN npm i npm@latest -g

# install dependencies first, in a different location for easier app bind mounting for local development
WORKDIR /opt
COPY package.json package-lock.json* ./
RUN npm install && npm cache clean --force
ENV PATH /opt/node_modules/.bin:$PATH

# copy in our source code last, as it changes the most
WORKDIR /opt/app
COPY . /opt/app

# run webpack and create bundle.js file
RUN npm run build


# Docker runs container as root by default, which can pose security threats
USER node

CMD ["npm", "start"]