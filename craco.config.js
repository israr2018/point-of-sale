const path = require(`path`);
const CracoLessPlugin=require("craco-less");
module.exports={
    webpack:{
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@services': path.resolve(__dirname, 'src/services'),
            '@pages': path.resolve(__dirname, 'src/pages'),
          }
    },
    plugins:[
        {
            plugin:CracoLessPlugin
        }
    ]
}