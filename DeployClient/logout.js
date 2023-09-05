const logoutButton = document.querySelector("#logout-button");

logoutButton.addEventListener("click", () => {
  console.log("로그아웃 되었습니다.");
  window.location.href = "./index.html";
});
