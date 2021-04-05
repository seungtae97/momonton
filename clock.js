const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    //현재 날짜와 시간을 가져옴
    const hours = date.getHours();
    //현재 시간을 hours에 저장
    const minutes = date.getMinutes();
    //현재 분을 minutes에 저장
    const second = date.getSeconds();
    //현재 초를 second에 저장
    clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : `${hours}`}:${
        minutes < 10 ? `0${minutes}` : `${minutes}`
    }:${second < 10 ? `0${second}` : `${second}`}`;
    //현재 시, 분, 초를 조건에 따라 clockTitle에 출력
}

function init() {
    //실행함수
    getTime();
    //시간을 가져오는 함수 호출
    setInterval(getTime, 1000);
    //1초마다 시간을 가져오는 함수 호출
}

init();
//실행함수 호출
