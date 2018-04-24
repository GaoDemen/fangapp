export default{
    getUrlKey:function(name){
        return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(location.href)||[,""])[1].replace(/\+/g,'%20'))||null;
    },
    timeFormat:function(nS){
        return new Date(parseInt(("/Date("+nS+")/").substr(6, 13))).toLocaleDateString();
    }


}