FROM node:18

RUN apt update && apt install -y ffmpeg

WORKDIR /app
COPY package* /app/

RUN npm install --production

COPY . /app/

CMD [ "npm", "start" ]
