module.exports = (port = 3000) => {
    return 'FROM node:latest\n' +
        'MAINTAINER FloatFlower.Haung <zxc110888asd@gmail.com>\n' +
        '\n' +
        `EXPOSE ${port}\n` +
        '\n' +
        'WORKDIR /usr/src/app\n' +
        '\n' +
        'COPY . .\n' +
        '\n' +
        'RUN rm -R node_modules\n' +
        'RUN npm install\n' +
        'RUN npm i pm2 -g\n' +
        '\n' +
        'CMD npm run server\n';
};