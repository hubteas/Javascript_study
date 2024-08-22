// 8번

// async function getName(){
//   return "짱구";
// }

// async function prinName(){
//   const name = await getName();
//   // getName()함수를 호출하고 해당함수가 완료될때까지 기다린다
//   console.log(name);
//   // 기다린 후에 받은 결과를 콘솔에 출력
// }

// prinName();

async function fetchData(){
  // 2초후에 데이터를 반환하는 비동기함수
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve("데이터로드 완료");
    }, 2000);
  });
}

async function printData(){
  const data = await fetchData();
  console.log(data);
}

printData();