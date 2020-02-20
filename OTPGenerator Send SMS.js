function ranCodeGenerate(number) //Random code generator for OTP
{
 var rcode= Math.floor(1000 + (9999 - 1000) * Math.random());
 send_sms(number,rcode);
 Logger.log('Message Send Successfully');
}
function send_sms(number,rcode) //Send SMS from TextLocal
{
  var apikey = encodeURIComponent('Your API Key'); // eNTER Your TextLocal API Key
  var sender = encodeURIComponent('TXTLCL');
  var message = encodeURIComponent('Welcome to Amarantos, Your OTP is: '+rcode);
  var formData = {
  'apikey': apikey,
  'numbers': number,
  'sender': sender,
  'message': message
  };

  var options = {
  'method' : 'post',
  'payload' : formData
};
  var response = UrlFetchApp.fetch('https://api.textlocal.in/send/', options);
  Logger.log(response.getContentText());
  
}
