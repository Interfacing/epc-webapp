# Use an official Node runtime as a parent image
FROM node:20.14.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY ./package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 7777
EXPOSE 7777

# Start the React development server
CMD ["npm", "run", "dev", "--", "--host"]
