FROM node:16.19.0-slim as base

# Install system dependencies
RUN apt-get update \
    && apt-get install -y wget gnupg \
    && rm -rf /var/lib/apt/lists/*

# Install Google Chrome Stable and fonts
# Note: this installs the necessary libs to make the browser work with Puppeteer.
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-stable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 \
       --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

FROM base as builder

WORKDIR /usr/src/node-app

# Install application dependencies
COPY package.json yarn.lock ./
RUN yarn install --pure-lockfile

# Build application code
COPY --chown=node:node . .
RUN yarn prisma:generate

FROM base as final

WORKDIR /usr/src/node-app

# Copy built application from builder stage
COPY --from=builder --chown=node:node /usr/src/node-app .

USER node

EXPOSE 3000

CMD ["yarn", "start"]
