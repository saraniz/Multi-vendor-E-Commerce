const bodyParser = require('body-parser')

const jsonMiddleware = (req,res,next) => {
    bodyParser.json()(req,res,next)
}

module.exports = jsonMiddleware;

//middleware
// app.use(bodyParser.json());
// app.use(express.json());
// app.use('/api',authRoutes);