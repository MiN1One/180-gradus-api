exports.getSkins = (req, res) => {

    res.status(201).json({
        status: 'success',
        data: {
            category: req.params.category,
            search: req.query.search && req.query.search
        }
    });
};