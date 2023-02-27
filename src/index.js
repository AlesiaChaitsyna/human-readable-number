module.exports = function toReadable(number) {
    var units = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    }

    var teens = {
        0: 'ten',
        1: 'eleven',
        2: 'twelve',
        3: 'thirteen',
        4: 'fourteen',
        5: 'fifteen',
        6: 'sixteen',
        7: 'seventeen',
        8: 'eighteen',
        9: 'nineteen',
    }

    var dozens = {
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }

    var hundreds = {
        1: 'one hundred',
        2: 'two hundred',
        3: 'three hundred',
        4: 'four hundred',
        5: 'five hundred',
        6: 'six hundred',
        7: 'seven hundred',
        8: 'eight hundred',
        9: 'nine hundred',
    };


    const numberString = String(number);
    console.log(numberString);

    if (numberString.length === 1) {
        return units[numberString]
    }
    if (numberString.length === 2) {
        if (numberString[0] === '1') {
            return teens[numberString[1]]
        }
        return numberString[1] === '0' ? dozens[numberString[0]] : dozens[numberString[0]] + ' ' + units[numberString[1]]
    };

    if (numberString.length === 3) {
        if (numberString[1] === '1') {
            return hundreds[numberString[0]] + ' ' + teens[numberString[2]]
        }
        if (numberString[1] === '0') {
            if (numberString[2] === '0') {
                return hundreds[numberString[0]] 
            } else return hundreds[numberString[0]] + ' ' + units[numberString[2]]  
        } else if (numberString[2] === '0') {
            return  hundreds[numberString[0]] + ' ' + dozens[numberString[1]]
        } else return  hundreds[numberString[0]] + ' ' + dozens[numberString[1]] + ' ' + units[numberString[2]]
        
    }
}

