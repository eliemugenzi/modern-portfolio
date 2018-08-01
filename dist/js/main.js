$(document).ready(() => {
  console.log("I am ready");
  const menuBtn = $(".menu-btn");
  const menu = $(".menu");
  const menuNav = $(".menu-nav");
  const menuBranding = $(".menu-branding");
  const navItems = $(".nav-item");
  console.log(navItems);

  const homeNav = $(".item-home");
  const aboutNav = $(".item-about");
  const workNav = $(".item-work");
  const contactNav = $(".item-contact");

  let showMenu = false;

  menuBtn.on("click", toggleMenu);

  function toggleMenu() {
    if (!showMenu) {
      menuBtn.addClass("close");
      menu.addClass("show");
      menuBranding.addClass("show");
      menuNav.addClass("show");
      navItems.addClass("show");

      homeNav.addClass("show");
      aboutNav.addClass("show");
      workNav.addClass("show");
      contactNav.addClass("show");

      showMenu = true;
    } else {
      menuBtn.removeClass("close");
      menu.removeClass("show");
      menuBranding.removeClass("show");
      menuNav.removeClass("show");
      navItems.removeClass("show");
      homeNav.removeClass("show");
      aboutNav.removeClass("show");
      workNav.removeClass("show");
      contactNav.removeClass("show");

      showMenu = false;
    }
  }
});
// DOM elements Selection

//Initial State of Menu

//When a User clicks on menu icon
