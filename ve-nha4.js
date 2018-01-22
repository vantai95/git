let n=8;
let m=8;
for(i=1;i<=8;i++)
{
    let s="";
    for(j=1;j<=8;j++){
        if(j<=n-i)
        {
            s+=" ";
        }
        else
        {
            s+="*";
        }
       
    }
    console.log(s);
}
    