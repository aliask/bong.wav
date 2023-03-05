FROM node:18-alpine

RUN apk update && apk add --no-cache ffmpeg

WORKDIR /app

RUN chown node:node /app
COPY --chown=node:node package* /app/

USER node
RUN npm install

COPY --chown=node:node . /app/

CMD [ "node", "index.js" ]
