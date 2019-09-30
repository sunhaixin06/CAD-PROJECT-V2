export const testFromFunc = {
    testPhoneNumber: (number)=> {
        return /(^(\d{3,4}-)?\d{7,8})$|(1[3|5|7|8]\d{9})/.test(number);
    },
    testIdCard: (idCard)=> {
        return /(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(idCard);
    }
}