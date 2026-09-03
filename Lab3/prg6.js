import {writefile} from 'fs/promises'; 

for(let i=1; i<=1000000; i++){
    await writefile('big.txt', `Hello Buddy ${i}\n`, {flag: 'a'});
}
