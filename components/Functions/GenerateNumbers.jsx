export function generateNumbers(length,multiplyBy){
    return Array.from({length: length}, () => Math.floor(Math.random() * multiplyBy))
}