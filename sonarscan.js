const scanner = require('sonarqube-scanner');
scanner(  
 {
serverUrl: 'http://localhost:9000',
token: "votre token",
options: {
'sonar.projectName': 'sonarqube-demo-angular-app',
'sonar.projectDescription': 'Sonarqube Demo Angular App',
'sonar.projectKey': 'la clé que vous avez choisi',
'sonar.projectVersion': '0.0.1',
'sonar.exclusions': '',
'sonar.sourceEncoding': 'UTF-8',
 }
},
() => process.exit()
)