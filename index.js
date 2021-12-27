function eligibility() {
  let name = prompt("What's your name?");
  let mail = prompt("What's your e-mail?");
  let possession = prompt("Do you have a Plumeria?");
  possession = possession.toLowerCase();
  possession = possession.trim();
  if (possession === "no" || possession === "nope") {
    alert("Plumerias are cool. You should get one!");
  } else {
    if (possession === "yes" || possession === "yeah") {
      alert(`Alright ${name} ! We'll give you more tips and infos!😊`);
    }
  }
}

let button = document.querySelector("button");
button.addEventListener("click", eligibility);
