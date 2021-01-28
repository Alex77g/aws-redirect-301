'use strict';

exports.handler = (event, context, callback) => {
    const request = event.Records[0].cf.request;
    // remove the comments if you want to redirect a specific link
    // const uri = request.uri;

    // if (uri == "/<old specific link>/"){
    const response = {
        status: '301',
        statusDescription: 'Permanently Moved',
        headers: {
            location: [{
                key: 'Location',
                value: '<https://new-url>'
            }]
    }}
    callback(null, response);
    // } else {
    //  callback(null, request);
    // }

};

