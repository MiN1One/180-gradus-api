// const bot = require('../telegram');

exports.acceptOrder = (req, res) => {
    // bot.getChatMember(827905012, 827905012)
    //     .then(d => console.log(d));


    // name: fnameRef.current.value,
    // last_name: lnameRef.current.value,
    // phone_number: phoneRef.current.value,
    // email: emailRef.current.value !== '' ? emailRef.current.value : '',
    // address: (!geoMode && addressInputRef.current.value) ? addressInputRef.current.value : '',
    // device_ids: ids,
    // order: {
    //     items
    // }

    // {
    //     "name": "White Leather",
    //     "price":"2.55",
    //     "device":"Galaxy S10E",
    //     "category":"phones",
    //     "deviceId":"606450eadbe7482a7cdfa4d0",
    //     "type":"skins"
    // }

    // const form = { ...req.body };

    // const { name } = req.body;
    // const fields = [];
    // // const orders = [];

    // delete form.name;
    // delete form.order;
    // !form.email && delete form.email;
    // !form.address && delete form.address;

    // for (let [key, val] of Object.entries(form)) {
    //     if (typeof val !== Object) fields.push(`${key}: ${val}`);
    // }

    // const orders = req.body.order.items.map((el) => {
    //     const itemFields = [];
    //     for (let [key, val] of Object.entries(el)) {
    //         itemFields.push(`${key}: ${val}`);
    //     }
    //     console.log(itemFields.join('\n'));
    //     return itemFields.join('\n');
    // }).join('\n-----------------------\n');

    // console.log(orders);

    // fields.unshift(`---------- <u>${name}</u> ----------`);

    // bot.sendMessage(
    //     827905012,
    //     [fields.join('\n'), orders].join('\n'), 
    //     { parse_mode: 'HTML' }
    // );

    // console.log(fields.toString().split(',').join('\n'));

    res.status(201).json({
        status: 'success',
        data: {}
    });
};