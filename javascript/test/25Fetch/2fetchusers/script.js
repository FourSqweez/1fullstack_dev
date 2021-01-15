const userList = document.querySelector(".user-list");

fetch("https://reqres.in/api/users?page=1")
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    const users = json.data;
    users.forEach((user) => {
      const userItem = document.createElement("div");
      userItem.classList.add("user-item");

      const avatarImg = document.createElement("img");
      avatarImg.classList.add("avatar");
      avatarImg.src = user.avatar;

      const fullNameText = document.createElement("h3");
      fullNameText.classList.add("fullname");
      fullNameText.innerHTML = user.first_name + " " + user.last_name;

      const emailText = document.createElement("p");
      emailText.classList.add("email");
      emailText.innerHTML = user.email;

      userItem.append(avatarImg, fullNameText, emailText);

      userList.append(userItem);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
