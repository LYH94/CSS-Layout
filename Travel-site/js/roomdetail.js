window.onscroll = function () {
  let w = window.outerWidth;
  let nowLocation = document.documentElement.scrollTop || document.body.scrollTop;
  if (nowLocation >= 720 && w >= 1920 || nowLocation >= 440 && w >= 768 || nowLocation >= 360 && w >= 375) {
    document.querySelector(".roombooking-navbar").classList.add("nav-display")
  } else {
    document.querySelector(".roombooking-navbar").classList.remove("nav-display")
  }
}
