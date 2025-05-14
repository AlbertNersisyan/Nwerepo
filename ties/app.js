 require('dotenv/config');



let res = 0
let rec = (num) => {
    if(res === 20) {
        return
    }

    num++
    res = num 
    console.log(num)

    return rec(num)
    
}

rec(1)
console.log(process.env.PORT);
