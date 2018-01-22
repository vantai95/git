let n=5;
let m=9;
for(i=1;i<=5;i++)
{
    let s=" ";
    for(j=1;j<=9;j++){

       if(j>n-i && j< n+i){
        s+="*";
       }
       else
       {
           s+=' ';
       }       
    }
    console.log(s);
}
    
// var dong = 5;
// var arr_dong = [];
// for(var i=0;i<dong;i++){
//     var value = 1;
//     var item_dong=" ";
//     for(var j=0;j<9;j++){
//         if(j>=dong-i-1 && j< dong+i){
//             item_dong+= value++;
//         }else{
//             item_dong+="*";
//         }
//     }
//     arr_dong.push(item_dong);
// }
// console.log(arr_dong);