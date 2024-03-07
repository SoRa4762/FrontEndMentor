const turnAllToRead = () => {
  //use a function and a loop to replace multiple classnames
  const changeToRead = document.getElementsByTagName("div");
  for (change of changeToRead) {
    change.classList.replace(
      "notifications-unread__notification",
      "notifications-read__notification"
    );
    change.classList.replace(
      "notifications-unead__notification-profile_picture",
      "notifications-read__notification-profile_picture"
    );
    change.classList.remove("notifications-unread__notification-red_circle");
  }

  //use this to only edit a single component
  document.getElementsByClassName("notif-number")[0].style.display = "none";

  //!repetitive
  //   const removeRedDot = document.getElementsByTagName("div");
  //   for (noRedDot of removeRedDot) {
  //     noRedDot.classList.remove("notifications-unread__notification-red_circle");
  //   }
  //!no need, just use document.get
  //   const turnNotifToZero = () => {
  //     const notifToZero = document.getElementsByTagName("span");
  //     notifToZero.
  //   }
};

document
  .getElementById("notifications-head__mark")
  .addEventListener("click", turnAllToRead);
