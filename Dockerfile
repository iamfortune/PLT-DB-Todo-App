FROM node:20-alpine

# RUN corepack enable && corepack prepare pnpm@latest --activate

ARG PLT_TODOCLIENT_URL
ENV PLT_TODOCLIENT_URL=$PLT_TODOCLIENT_URL

ENV APP_HOME=/home/app/node/

WORKDIR $APP_HOME

COPY package.json package.json
COPY package-lock.json package-lock.json

COPY . .

RUN npm install
RUN cd services/red-frog && \
    npm install && \
    npm run build

EXPOSE 3042

CMD ["npm", "start"]