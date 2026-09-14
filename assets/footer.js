(function () {
  "use strict";

  if (document.querySelector(".site-footer")) return;

  var YEAR = new Date().getFullYear() || 2026;

  var style = document.createElement("style");
  style.id = "site-footer-styles";
  style.textContent = [
    ".site-footer {",
    "  background: #1a2433;",
    "  color: #a4b0c0;",
    "  font-size: 13px;",
    "  line-height: 1.5;",
    "  padding: 14px 20px;",
    "  margin-top: 40px;",
    "}",
    ".site-footer__inner {",
    "  max-width: 980px;",
    "  margin: 0 auto;",
    "  display: flex;",
    "  flex-direction: column;",
    "  align-items: center;",
    "  gap: 8px;",
    "}",
    ".site-footer__copy {",
    "  text-align: center;",
    "}",
    ".site-footer__copy a {",
    "  color: #ff9900;",
    "  text-decoration: none;",
    "}",
    ".site-footer__copy a:hover { text-decoration: underline; }",
    ".site-footer__badges {",
    "  display: flex;",
    "  justify-content: center;",
    "  gap: 8px;",
    "}",
    ".site-footer__badge {",
    "  position: relative;",
    "  display: flex;",
    "  flex-direction: column;",
    "  align-items: center;",
    "  width: 45px;",
    "  text-decoration: none;",
    "  color: #a4b0c0;",
    "  font-size: 9px;",
    "  line-height: 1.2;",
    "  text-align: center;",
    "}",
    ".site-footer__badge img { display: block; width: 45px; height: 45px; }",
    ".site-footer__badge::after {",
    "  content: attr(data-tooltip);",
    "  position: absolute;",
    "  bottom: calc(100% + 8px);",
    "  left: 50%;",
    "  transform: translateX(-50%);",
    "  background: #0f1b2a;",
    "  color: #fff;",
    "  font-size: 10px;",
    "  line-height: 1.3;",
    "  white-space: nowrap;",
    "  padding: 4px 8px;",
    "  border-radius: 6px;",
    "  opacity: 0;",
    "  visibility: hidden;",
    "  transition: opacity 0.15s ease;",
    "  pointer-events: none;",
    "  z-index: 10;",
    "  box-shadow: 0 2px 6px rgba(0,0,0,0.3);",
    "}",
    ".site-footer__badge:hover::after,",
    ".site-footer__badge:focus-visible::after {",
    "  opacity: 1;",
    "  visibility: visible;",
    "}",
  ].join("\n");
  document.head.appendChild(style);

  function badgeAnchor(id, img, name) {
    return (
      '<a class="site-footer__badge" href="https://www.credly.com/badges/' + id + '/embedded" target="_blank" rel="noopener" data-tooltip="' + name + '" aria-label="' + name + '">' +
        '<img src="https://images.credly.com/images/' + img + '" alt="' + name + '" width="45" height="45">' +
      "</a>"
    );
  }

  var badgesHTML =
    badgeAnchor("48f3e4d3-000d-4166-9af4-68d585299ae8", "4d4693bb-530e-4bca-9327-de07f3aa2348/image.png", "AWS Certified AI Practitioner") +
    badgeAnchor("2fde6be5-5a1d-42a8-ab03-ce141bab9d84", "00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png", "AWS Certified Cloud Practitioner");

  var footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML =
    '<div class="site-footer__inner">' +
      '<div class="site-footer__badges">' + badgesHTML + "</div>" +
      '<div class="site-footer__copy">' +
        '&copy; <a href="https://me.jeremypaca.biz/" target="_blank" rel="noopener">Jeremy Patrick Pacabis</a> ' +
        '<span class="site-footer__year">' + YEAR + "</span>. " +
        '<a href="https://github.com/73R3WY/certification-reviewers" target="_blank" rel="noopener">GitHub</a>' +
      "</div>" +
    "</div>";
  document.body.appendChild(footer);
})();