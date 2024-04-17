export default function auth(){
    let now = new Date();
    
    if(localStorage.getItem('user-token') && JSON.parse(localStorage.getItem('user-token')).expiry > now.getTime()){
        return true;
    }else{
        localStorage.clear();
        return false;
    }


}