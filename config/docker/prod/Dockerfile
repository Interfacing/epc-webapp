# Use an official Node runtime as a parent image
FROM node:20.14.0 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY ./package*.json ./

# Remove node_modules and package-lock.json, then install dependencies
RUN rm -rf node_modules package-lock.json && npm install

ENV PATH /app/node_modules/.bin:$PATH

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Use an official Nginx image to serve the React app
FROM nginx:1.25.5-alpine

# Copy the built React app to the Nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration
COPY ./config/docker/prod/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 7777
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
