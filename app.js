const { server, app, Router } = require('./server');

// importing routes
const APIRouters = require('./routes/routers');
// routers
Router.use('/', APIRouters);

// global error handler
app.use((err, req, res, next) => {
  console.error(err);
  // render the error page
  res.status(err.status || 500);
  const response = {
    message: (err.data && err.data.message) || 'Internal server error',
    status: err.status || 500
  };

  res.send(response);
});

// graceful termination of process
process.on('SIGTERM', (error) => gracefulTermination(error, server));
process.on('SIGINT', (error) => gracefulTermination(error, server));
process.on('uncaughtException', (error) => gracefulTermination(error, server));
process.on('unhandledRejection', (error) => gracefulTermination(error, server));
