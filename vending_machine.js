const read = require("readline-sync");
const selection = read.question('Which item do you select: ')
let insert_money = read.questionInt('Please insert your money (50,100,200,500): ')
function vending_machine (item, money){
    let items = [
        ['Snickers', 100],
        ['Water', 50],
        ['Coffee', 100],
        ['Tea', 50],
        ['Sendwich', 200],
        ['Cookies', 500]
    ]
    for(let i=0; i < items.length; i++){
        if(item === items[i][0]) {
            if(money == items[i][1]){
                console.log('Here is your ' + item);
                break;
            }
         if( money == 100 || money == 200 || money == 500 && money > items[i][1]){
             change = money - items[i][1];
                console.log("take your " + change);
            console.log('Here is your ' + item);
            break;
            }
        else if(money == 50 || money == 100 || money == 200 && money < items[i][1]){
            console.log('Please insert more money');
        }
        else {
            console.log("Returned " + money);
            console.log("Please insert 50, 100, 200, 500 only");
            break;
        }
    }
    }
    }

vending_machine(selection,insert_money);