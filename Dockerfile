# Use Node.js 18 Alpine image for a lightweight environment
FROM node:18-alpine

# Set working directory in the container
WORKDIR /app

# Copy the package files and install only production dependencies
COPY package*.json ./
RUN npm install --production

# Copy the rest of the application files
COPY . .

# Build the TypeScript project
RUN npm run build

# Expose port 3000 for the application
EXPOSE 3000

# Start the Node.js application
CMD ["node", "dist/index.js"]

