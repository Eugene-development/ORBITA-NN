FROM --platform=linux/amd64 node:20.5.0

WORKDIR /project
COPY . .

RUN npm install
RUN npm run build

ENV HOST 0.0.0.0

CMD [ "npm", "run", "start" ]