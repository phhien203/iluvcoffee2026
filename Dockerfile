# Base image
FROM node:20

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
# COPY pnpm-lock.yaml ./
# COPY pnpm-workspace.yaml ./
# COPY prisma ./prisma/
# COPY prisma.config.ts ./

# Install app dependencies
RUN npm i -g pnpm
RUN pnpm install
RUN pnpm approve-builds --all

# Bundle app source
COPY . .

RUN pnpm run prisma:generate

# Creates a "dist" folder with the production build
RUN pnpm run build

# Expose the port on which the app will run
EXPOSE 3000

# Start the server using the production build
CMD ["npm", "run", "start:prod"]
