async function timeout(){
  return new Promise ((resolve) => {
    setTimeout( () => {
      console.log(1);
      resolve();
    },3000);
  });
}

// console.log(timeout()); ->  Promise {'hello'}
// async 返回的是一个Promise对象

// timeout().then( (res) => {
//   console.log(res);
// }); 
// console.log(2); -> 2 hello


// async function fn(){
//   await timeout();
//   console.log(2);
// };  
// fn();  -> 1 2

// async await 把异步变成同步的
// await 只能在async的内部使用