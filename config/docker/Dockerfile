# Use an official Node runtime as a parent image
FROM node:20.14.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY ../../package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY ../../ .

# Build the React app
RUN npm run build

# Use an official Nginx image to serve the React app
FROM nginx:alpine

# Copy the built React app to the Nginx html directory
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
