
function helloName(name) {
    alert(`Hello ${name}!`);
}
helloName("GDG on Campus Sogang");
//button과 input을 얻어옴
//선택자
const inputText = document.getElementById("helloName");
const helloBtn = document.getElementById("helloBtn");


helloBtn.addEventListener("click", () => {
    //클릭시 어떤 동작을 해줘
    //inputText.value를 통해 input의 값에 접근
    helloName(inputText.value);
});