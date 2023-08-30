const tBody = document.querySelector("tbody");

fetch("./data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    tBody.innerHTML = "";
    jsonData.forEach((item, index) => {
      const tableRow = document.createElement("tr");
      tableRow.innerHTML = `<td>${++index}</td>
                            <td>${item.word}</td>
                            <td>${item.meaning}</td>`;

      tBody.appendChild(tableRow);
    });
  });

//   en to bn convert
// let number = 1364;
// Number(number).toLocaleString("bn-BD", {
//   style: "decimal",
//   maximumFractionDigits: 2,
// });
