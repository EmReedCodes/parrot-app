//@desc want to create a server error if its not 400
//we dont want info to be given out so we just display null instead
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    res.status(statusCode)
    res.json({
        message : err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })

}

module.exports = {
    errorHandler,
}