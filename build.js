var fs = require('fs');

var studentPrivacyIntro = fs.readFileSync('./student_other/your_privacy.html', 'utf8');
var studentPrivacy = fs.readFileSync('./student_privacy/index.html', 'utf8');
var studentTerms = fs.readFileSync('./student_terms/index.html', 'utf8');
var universityPrivacy = fs.readFileSync('./university_privacy/index.html', 'utf8');

var data = {
    studentPrivacyIntro: studentPrivacyIntro.replace(/(\n)(\s)/g, ''),
    studentPrivacy: studentPrivacy.replace(/(\n)(\s)/g, ''),
    studentTerms: studentTerms.replace(/(\n)(\s)/g, ''),
    universityPrivacy: universityPrivacy.replace(/(\n)(\s)/g, '')
};

fs.writeFile('./enlightened_privacy.json', JSON.stringify(data), err => {
    if (!err) {
        console.log('File compiled');
    }
});