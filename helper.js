module.exports.getCallbackUrl = function(){
    if(process.env.environment == 'prod'){
        return 'https://smoggy-top-hat-mite.cyclic.app/users/auth/google/callback'
    }else{
        return 'http://localhost:8000/users/auth/google/callback';
    }
    
}