module.exports = (f) => (req, res, next) => {
    f(req, res, next).catch(er => next(er));    
};