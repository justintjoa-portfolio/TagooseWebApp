FROM node:8
# Create app directory
WORKDIR /usr/src/appfront
# Install app dependencies
COPY package*.json ./

RUN npm install --silent
# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 400
CMD ["yarn", "start"]