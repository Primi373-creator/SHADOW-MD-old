FROM node:lts-buster

RUN apt-get update && \
    apt-get install -y \
    ffmpeg \
    imagemagick \
    webp && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

COPY package.json .
RUN npm install

COPY . .

EXPOSE 8000  

CMD ["node", "."]
