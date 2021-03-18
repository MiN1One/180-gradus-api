const bot = require('../telegram');

exports.acceptOrder = (req, res) => {
    bot.getChatMember(827905012, 827905012)
        .then(d => console.log(d));

    bot.sendMessage(827905012, JSON.stringify(req.body));

    res.status(200).json({
        status: 'success',
        data: req.query
    });
};

