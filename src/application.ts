import {json, urlencoded} from 'body-parser';
import express, {Express} from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import routes from './route/index';

const application: Express = express();
application.use(cors());
// Server access log
application.use(
  morgan(':remote-addr - :remote-user [:date[iso]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'),
);

// Set security & utilities
application.use(helmet());
application.use(express.json({limit: '50mb'}));
/*app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))*/
application.use(express.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));

// Route handlers
application.use(routes);
application.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
});
export default application;
