# Use official Node.js LTS version
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app code
COPY . .

# Open port 3001 inside container
EXPOSE 3001

# Start the Node.js app
CMD ["node", "server.js"]
