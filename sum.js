let n=10, m=4;
let c=0;
while(n){
    if(n%m!=0){
 n--;
 if(n%m==0){
c++;
if(c==1){
    console.log(n)
    break;
}

 }
}else{
        while(n%m!=0){
            n++;
            if(n%m==0){
                c++;
                if(c==1){
                    console.log(n)  
                    break;
                }
            }
        }
    }
    
    
}