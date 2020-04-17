function startRandom() {
  console.log("start Ramdom");

  const randomValue = Math.random() * 3 + 1;
  const exeValue = Math.floor(randomValue);

  const backgroundFilName = exeValue + ".png";
  console.log(backgroundFilName);
}

function init() {
  console.log("init start");

  // 다른 함수 실행();
  startRandom();
}

init();

/**
 *
 *  1. 표기법
 *      camel 표기법 ||  case 표기법 ||  낙타 표기법
 *          소문자로 시작하고 띄어쓰기를 해야 하는 경우 띄어쓰기를 하지 않고 다음 글자를 대문자로 표기한다.
 *          단, Class 를 생성할 경우에는 대문자로 시작한다.
 *          숫자로 시자갈 수 없고, 특수문자는 _(언더바)만 가능한다.
 *
 * get background name  =>  getBackgroundName
 * modified board data  =>  modifiedBoardData
 *
 *  let =>  변하는 상수
 *  cosnt => 변하지 않는 수
 *
 */

// 숙제 : 버튼을 누르면 6개의 숫자가 한꺼번에 바뀌고 한꺼번에 나오게 만들어야함
