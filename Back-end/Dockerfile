# Step 1: Use an official Node.js image from Docker Hub as the base image
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json to install dependencies
COPY ./package*.json ./

# Step 4: Install the app dependencies
RUN npm install --production

# Step 5: Copy the rest of the app's source code into the container
COPY . .

# Step 6: Set the environment variables (optional, will be overridden by docker-compose)
ENV PORT=5000

# Step 7: Expose the port that the app will run on
EXPOSE 5000

# Step 8: Start the app using npm
CMD ["npm", "start"]
