FROM node:14.14
ENV NODE_ENV production
WORKDIR /src
COPY ["package.json","package-lock.json"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE  3000
CMD ["npm","dev"]