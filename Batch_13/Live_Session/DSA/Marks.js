let marks = [88,98,96,94,92];
let n = marks.length

let sum  = 0;
for(let i=0 ; i<n ; i++){
    sum += marks[i];  // sum = sum + marks[i]
}

console.log("Total marks obtained : "+sum);
let avg = sum/n;
console.log("Average marks obtained : "+avg);
let percentage = Math.round((sum/500)*100);
console.log("Percentage : "+percentage+"%");