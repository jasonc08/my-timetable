FROM node
ENV Node_ENV=production
WORKDIR /my-timetable
COPY . .
RUN npm i
RUN npm run build
EXPOSE 4200
CMD ["npm","start"]

