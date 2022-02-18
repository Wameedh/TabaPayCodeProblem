

import fetch from 'node-fetch';

// To install node-fetch in the terminal, run: npm i
// To test the code in the terminal, run: node tabapay.js

async function apiCall() {
    let data;
    try {
    const response = await fetch(`https://demos.sandbox.tabapay.net/question2.data`);
    data = await response.text();
    } catch(err) {
        console.log(err);
    }
    return data;
  }

const data = await apiCall();
// convert our data to an array
const arrayData = data.split("\n");
// remove last item since we splited with a delimiter '\n' there will be an empty item at the end of the array.
arrayData.pop(); 

  const solution = (data) => {
    const arr = data.split(' ');
    const startPoint = parseInt(arr[0]);
    const endPoint = parseInt(arr[1]);

    const dis = endPoint - startPoint;

    const newdis = Math.abs(dis); // convert the calculated distance/diffrence to absolute value

    if(newdis > 180) {
        if(endPoint > startPoint) {
            return (newdis - 360);
        }
        return (360 - newdis);

    }
    return dis;

  }

  // Testing
  arrayData.forEach(element => {
        console.log(solution(element));
  });
  
// You can test manually uncomment the following lines:
//   const test1 = "10 20";
//   const test2 = "10 350";
//   const test3 = "315 45";
//   const test4 = "180 270";
//   const test5 = "45 270";
//   const test6 = "240 45";

//   console.log(solution(test1));  // 10
//   console.log(solution(test2)); //-20
//   console.log(solution(test3)); // 90
//   console.log(solution(test4)); // 90
//   console.log(solution(test5)); // -135
//   console.log(solution(test6)); // 165