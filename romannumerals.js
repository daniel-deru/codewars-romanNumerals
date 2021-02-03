const romanNumerals = {
   nums: { 
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
    },

    toRoman(number){
       let roman = ''
       let keys = Object.keys(this.nums).reverse()
       let values = Object.values(this.nums).reverse()
       for(let i = 0;number+i > i; i++){
           if(number >= values[0]){
               number -= values[0]
               roman += keys[0]
           } else if(number < values[0]){
               values.shift()
               keys.shift()
           }
       }
       return roman
        .replace(/VIIII/g, "IX")
        .replace(/LXXXX/g, "XC")
        .replace(/DCCCC/g, "CM")
        .replace(/IIII/g, "IV")
        .replace(/XXXX/g, "XD")
        .replace(/CCCC/g, "CD")
    },
    fromRoman(roman){
        let number = []
        let keys = Object.keys(this.nums).reverse()
        let values = Object.values(this.nums).reverse()
        roman = roman
                .replace(/IX/g, "VIIII")
                .replace(/XC/g, "LXXX")
                .replace(/CM/g, "DCCCC")
                .replace(/IV/g, "IIII")
                .replace(/XD/g, "XXXX")
                .replace(/CD/g, "CCCC")

        for(let i = 0; i < roman.length; i++){
            for(let j = 0; j < keys.length; j++){
                if(roman[i] == keys[j]) number.push(values[j])
            }
        }       
        return number.reduce((x, y) => x + y)
    }
};

console.log(romanNumerals.toRoman(2006))
console.log(romanNumerals.fromRoman( 'MDCLXIX'))