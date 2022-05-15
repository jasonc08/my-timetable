FROM node:16.13.1
ENV Node_ENV production
WORKDIR /my-timetable/
COPY package*.json ./
RUN npm install -g @angular/cli  
RUN npm i 
COPY . .
RUN npm run build
CMD npm run start -- --port 4200 --host 0.0.0.0
EXPOSE 4200


