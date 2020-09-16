// entry ->output
const path = require('path')
const extractTextPlugin = require('extract-text-webpack-plugin');
const CSSExtract = new extractTextPlugin('styles.css');
const webpack = require('webpack');
//webpack plugin pass env variables to client side javascript(bundle.js)


process.env.NODE_ENV = process.env.NODE_ENV || 'development'; 

if(process.env.NODE_ENV === 'test')
{
    //dotenv loads file and set process.env.KEY=values 
    require('dotenv').config({path:'.env.test'});
}else if(process.env.NODE_ENV === 'development')
{
   require('dotenv').config({path:'.env.development'});
};


//process.env.NODE_ENV

module.exports = (env) =>
{
    const isProduction = env === 'production';
    
    return { 
        entry:['babel-polyfill','./src/app.js'],
        output:
        {
            path:path.join(__dirname,'public','dist'),
            filename:'bundle.js'
        },
        module:
        {
            rules:[{
                loader:'babel-loader',
                test:/\.js$/,
                exclude:/node_modules/
            },{
                test: /\.s?css$/,
                use:CSSExtract.extract({
                    use:[
                        //it should load-in .css file and collect css then converts to js rep of css
                        {
                            loader:'css-loader',
                            options:{
                                sourceMap:true
                            }
                        },
                        //it should grab .scss file and use node-sass behind the scenes to convert/compile/transform to .css file. 
                        {
                            loader:'sass-loader',
                            options:{
                                sourceMap:true
                            }
                        }
                    ]
                })
            }]
        },
        plugins:[
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY':JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN':JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL':JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID':JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET':JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID':JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
                'process.env.FIREBASE_APP_ID':JSON.stringify(process.env.FIREBASE_APP_ID),
                'process.env.FIREBASE_MEASUREMENT_ID':JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID)
            })
        ],
        devtool:isProduction ? 'source-map' :'inline-source-map',
        devServer:
        { 
            //dev-server never writes assets to the file-system.it serves up virtually
            contentBase:path.join(__dirname,'public'),
            historyApiFallback:true,
            publicPath:'/dist/'
        }
    };
};
