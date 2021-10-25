window.onscroll = function () {
  let w = window.outerWidth;
  let nowLocation = document.documentElement.scrollTop || document.body.scrollTop;
  if (nowLocation >= 86 && w >= 1920 || nowLocation >= 76 && w >= 375) {
    document.querySelector(".checkoutNotice-navbar").classList.add("fixed-top")
  } else {
    document.querySelector(".checkoutNotice-navbar").classList.remove("fixed-top")
  }
}
