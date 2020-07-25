FROM node:10
COPY controllers /nodeapp/controllers
COPY routes /nodeapp/routes
COPY db /nodeapp/db
COPY models /nodeapp/models
ADD index.js /nodeapp/index.js
WORKDIR /nodeapp
RUN npm install mongodb --save
RUN npm install nodemon --save
RUN npm install express body-parser cors mongoose dotenv
CMD npx nodemon index.js
