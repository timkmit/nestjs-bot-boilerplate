FROM node:18-buster

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN npx prisma generate

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
