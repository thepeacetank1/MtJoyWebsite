document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const emailLink = document.querySelector("[data-protected-email]");

if (emailLink) {
  const email = ["eninnaej", "gro.enicidemyojtm"].map((part) => [...part].reverse().join("")).join("@");
  emailLink.href = `mailto:${email}`;
  emailLink.textContent = email;
}

const phoneLink = document.querySelector("[data-protected-phone]");

if (phoneLink) {
  const digits = [..."6103802179"].reverse().join("");
  phoneLink.href = `tel:+1${digits}`;
  phoneLink.textContent = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}
