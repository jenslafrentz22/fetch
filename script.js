document.querySelector("button").addEventListener("click", loadData);

function loadData() {
  fetch("https://krautipsum.com/api/kraut")
    .then((response) => response.json())
    .then((data) => console.log(data));

  fetch("https://krautipsum.com/api/sentence")
    .then((response) => response.json())
    .then((data) => {
      document.body.append(document.createTextNode(data.sentence));
    });
}
