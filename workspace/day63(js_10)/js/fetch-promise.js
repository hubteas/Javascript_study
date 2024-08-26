//fetch를 용해 url을 매개변수로 promise를 반환
// 전역 fetch() 메서드는 네트워크에서 리소스를 취득하는 절차를 시작하고, 응답이 사용 가능해지면 이행하는 프로미스를 반환합니다.
// 프로미스는 요청에 대한 응답을 나타내는 Response 객체로 이행합니다.
// fetch() 프로미스는 네트워크 오류(보통 권한 문제 등)가 있을 때만 거부되며, 404 등의 HTTP 오류 시에는 거부되지 않습니다. 그러므로 then() 처리기는 반드시 Response.ok 또는 Response.status 속성을 확인해야 합니다.
////fetch 함수는 자바스크립트에서 제공하는 내장함수, 네트워크 요청을 보내기 위해 사용
////비동기적으로 작동하며 promise 객체를 반환함
fetch("https://jsonplaceholder.typicode.com/posts/100").then((response)=>{
  // then 메소드는 fetch 요청이 성공적으로 완료되었을 때 호출
  // 
  if(!response.ok){// HTTP 응답 상태코드 200번대 인지 확인하는 boolean값
    throw new Error(`response : ${response.status}`);
  }
  return response.json();
  // response.ok가 true라면 json 형식으로 변환하는 비동기함수(promise반환)
}).then((post)=> {//json으로 변환한 데이터 처리. post json객체. 모든 게시물의 데이터를 포함
  // return값이 반환된다면(error가아니라면) post를 매개변수로 하여 결과를 가져옴
  if(!post){//null, undefined인지 확인
    throw new Error(`none result`);
  }
  return {id: post.id, title: post.title};
  // post 객체가 유효하면 id, title 속성만 포함한 새로운 객체를 생성해서 반환
}).then(console.log).catch((error)=>{//catch 메소드 이전에 발생한 모든 오류를 처리
  console.log(error);
})
// 결과값을 출력. error값은 위에서 출력되는게 아닌 마지막에 출력됨