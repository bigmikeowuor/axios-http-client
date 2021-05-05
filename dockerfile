# create production build
FROM nginx:stable-alpine

# copy project files and folders to production working directory
COPY . /usr/share/nginx/html

# default container port
EXPOSE 80

# start the application
CMD ["nginx", "-g", "daemon off;"]