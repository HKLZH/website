function copyText(){
    let text=document.querySelector("#bottom");
    text.select();
    document.execCommand("copy")

}
function charToChar(char)
{
    let codePonit=char.charCodeAt(0);
    return codePonit.toString(2).padStart(16,'0')
}
function rep(char)
{
    return char.replace(/0/g,'傻').replace(/1/g,'比')
}
function unrep(char)
{
    return char.replace(/傻/g,'0').replace(/比/g,'1')
}
function encrypt()
{
    let pretext=document.querySelector("#top").value;
    let disp=document.querySelector("#bottom")
    let content=''
    //console.log(pretext)
    console.log("加密开始。。。");
    for(let i =0;i<pretext.length;i++)
    {
        content+=rep((charToChar(pretext[i])));
    }
    disp.value=content;
}   
function decrypt()
{   try{
    let disp=document.querySelector("#top");
    let subtext=document.querySelector("#bottom").value;        
    console.log("解密开始。。。")
    let content=''
    let lis=unrep(subtext).match(/.{16}/g);
    //console.log(lis);
    for(let i=0;i<lis.length;i++)
    {
        str_codepoint=lis[i]
       // console.log(str_codepoint)
        codespoint=parseInt(str_codepoint,2);
        //console.log(codespoint)
        content+=String.fromCharCode(codespoint);
        //console.log(content)
    }
    disp.value=content 
}catch{
    alert("搞什么呢？老登，解不动了。自己算去吧")
}
   
}

