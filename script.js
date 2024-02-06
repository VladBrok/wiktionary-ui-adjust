[...document.querySelectorAll("a")].forEach((link) => {
  const textAfter = link.nextSibling?.textContent;
  if (/=\d+/.test(textAfter)) {
    link.style.color = "black";
    link.setAttribute("target", "_blank");
    link.nextSibling.textContent = " ";
  }
});
