# Base image
FROM node:14

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source
COPY .. .

# Start app
CMD [ "npm", "start" ]