FROM node:18

RUN apt update && apt install -y ffmpeg

WORKDIR /app

RUN chown node:node /app
COPY --chown=node:node package* /app/

USER node
RUN npm install --production

COPY --chown=node:node . /app/

CMD [ "node", "index.js" ]
