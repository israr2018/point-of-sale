const path = require(`path`);
const CracoLessPlugin=require("craco-less");
module.exports={
    webpack:{
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@api': path.resolve(__dirname, 'src/api'),
            '@pages': path.resolve(__dirname, 'src/pages'),
          }
    },
    plugins:[
        {
            plugin:CracoLessPlugin
        }
    ]
}