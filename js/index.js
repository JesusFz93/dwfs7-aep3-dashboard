const ctx = document.getElementById("myChart").getContext("2d");

const makeChart = (dates, positives) => {
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: dates,
      datasets: [
        {
          label: "Num. de casos",
          data: positives,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          labels: {
            font: {
              size: 30,
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

const getCovidApi = async () => {
  const resp = await axios.get(
    "https://api.covidtracking.com/v1/states/tx/daily.json"
  );
  const last30 = resp.data.slice(0, 30);

  const dates = last30.map(({ date }) => date);
  const positives = last30.map(({ positive }) => positive);

  console.log(dates);
  console.log(positives);

  makeChart(dates, positives);
};

getCovidApi();
