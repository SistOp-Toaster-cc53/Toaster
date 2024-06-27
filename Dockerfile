# Use an official Node base image
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy your application files (including package.json and package-lock.json if available) to the container
COPY . /app

# Install project dependencies
RUN npm install

# Install Vue CLI globally in the container
RUN npm install -g @vue/cli

# Verify that vue-cli-service is available
RUN npx vue-cli-service --version

# Expose the port the app runs on
EXPOSE 4200

# Define the command to run your app (this will be the default command run by the container)
CMD ["npm", "run", "serve"]
