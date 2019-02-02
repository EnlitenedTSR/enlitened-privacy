var fs = require('fs');

var studentPrivacy = fs.readFileSync('./student-privacy/index.html', 'utf8');
var studentTerms = fs.readFileSync('./student-privacy/index.html', 'utf8');
var universityPrivacy = fs.readFileSync('./university-privacy/index.html', 'utf8');

var data = {
    studentPrivacy,
    studentTerms,
    universityPrivacy
};

fs.writeFile('./enlighten_privacy.json', JSON.stringify(data), err => {
    if (!err) {
        console.log('File compiled');
    }
});