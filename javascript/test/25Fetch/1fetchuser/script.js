const avatarImg = document.querySelector(".avatar");
const fullNameText = document.querySelector(".fullname");
const emailText = document.querySelector(".email");

fetch("https://reqres.in/api/users/3")
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    const user = json.data;
    avatarImg.src = user.avatar;
    fullNameText.innerHTML = user.first_name + " " + user.last_name;
    emailText.innerHTML = user.email;
  })
  .catch((error) => {
    console.log(error.message);
  });
