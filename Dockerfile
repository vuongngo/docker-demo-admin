FROM node

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package.json /app/
RUN yarn install

# Bundle app source
COPY . /app

EXPOSE 3005
CMD [ "npm", "start" ]