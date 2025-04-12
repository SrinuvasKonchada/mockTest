let n=-15, m=6;
let c=0;
while(n){
    if(n%m!=0){
 n--;
 if(n%m==0){
c++;
if(c==1){
    console.log(n)
}

 }
}else{
        while(n%m!=0){
            n++;
            if(n%m==0){
                c++;
                if(c==1){
                    console.log(n)  
                }
            }
        }
    }
    
    
}