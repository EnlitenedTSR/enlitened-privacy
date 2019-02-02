var fs = require('fs');
exports.studentPrivacy = fs.readFileSync('./student-privacy/index.html', 'utf8');
exports.studentTerms = fs.readFileSync('./student-privacy/index.html', 'utf8');
exports.universityPrivacy = fs.readFileSync('./university-privacy/index.html', 'utf8');