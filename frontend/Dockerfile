# FROM node:12-alpine

# WORKDIR /app

# COPY package*.json ./

# RUN npm install --force

# COPY . .

# # Create the directory for .eslintcache and change ownership
# RUN mkdir -p /app/node_modules/.cache && chown -R node:node /app/node_modules/.cache && chmod -R 777 /app/node_modules/.cache

# # Change user back to node
# USER node

# CMD [ "npm", "start" ]

FROM node:12-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --force

COPY . .

USER root

# Set permissions for OpenShift compatibility
RUN chgrp -R 0 /app && \
    chmod -R g+rwX /app

USER 1001

CMD [ "npm", "start" ]

