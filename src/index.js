import {createStore} from "redux";

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS"

// 리듀서 data를 수정하는 함수, 함수형이어함
const countModifier = (count = 0, action) =>{  
  
  // 리덕스 공식문서에는 swich문을 사용하는 것을 권장
  // case 조건에 String을 사용하는것보다 const 변수를 사용하는것이 낫다. string으로 조건을 잡으면 자바스크립트 에러가 발생하지 않아 오류를 잡기 힘듬.
  switch(action.type){
    case ADD :
      return count+1;
    case MINUS :
      return count-1;
    default :
      return count;
  }
};

const countStore = createStore(countModifier);
const onChange = () =>{
  number.innerText = countStore.getState();
}

// createStore의 subScribe는 state가 변화가 있을 때 호출됨
countStore.subscribe(onChange);

// action은 Object여야함. action type은 다른 문자로 변경이 안됨
plus.addEventListener('click', ()=>{countStore.dispatch({type:ADD})})
minus.addEventListener('click',()=>{countStore.dispatch({type:MINUS})})