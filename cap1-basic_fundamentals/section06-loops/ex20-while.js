let arr = [
    20, 40, 60, 100, 150, 200, 400, 800, 1600
]

let i =0;

while(arr[i] > 20 && arr[i] < 1000){
    console.log(arr[i])
    i++;
}

i = 0;

do{
    console.log(arr[i])
    i++;
} while(arr[i] > 20 && arr[i] < 1000);