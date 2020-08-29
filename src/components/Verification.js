

export function verification(users, pass, name) {
 let answer = false;
    users.forEach(element => {
        if (сheck_LoginData_with_RegData(element, pass, name)) {
            answer = true;
        }      
    });
    return answer;
}

function сheck_LoginData_with_RegData(regUser, pass, name) {
    if (regUser.name === name && pass === regUser.password) {
        return true;
    } else {
        return false;
    }
}


export function serachTheSameUser(users, name) {
    let answer = false;
       users.forEach(element => {
           if (сheck_LoginName_with_RegName(element, name)) {
               answer = true;
           }      
       });
       return answer;
   }
   
   function сheck_LoginName_with_RegName(regUser, name) {
       if (regUser.name === name) {
           return true;
       } else {
           return false;
       }
   }


