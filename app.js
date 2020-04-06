const express = require('express');
const app = express();
const userRoutes = require('./api/routes/users');

// app.use('*', (res, req, next) => {
//     res.status(404).json({
//         message: 'Route does not exist'
//     });
// });
app.use('/users', userRoutes)

module.exports = app;
