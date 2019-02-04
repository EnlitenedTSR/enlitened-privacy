var fs = require('fs');

var studentPrivacy = fs.readFileSync('./student-privacy/index.html', 'utf8');
var studentTerms = fs.readFileSync('./student-terms/index.html', 'utf8');
var universityPrivacy = fs.readFileSync('./university-privacy/index.html', 'utf8');

var data = {
    studentPrivacy: studentPrivacy.replace(/(\n)(\s)/g, ''),
    studentTerms: studentTerms.replace(/(\n)(\s)/g, ''),
    universityPrivacy: universityPrivacy.replace(/(\n)(\s)/g, '')
};

fs.writeFile('./enlightened_privacy.json', JSON.stringify(data), err => {
    if (!err) {
        console.log('File compiled');
    }
});