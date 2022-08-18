import { getCovidApi } from "../apis/covid.js";
import { makeChart } from "../chart/chart.js";

export const getCovidEvent = async () => {
  const resp = await getCovidApi();

  const last30 = resp.data.slice(0, 30);

  const dates = last30.map(({ date }) => date);
  const positives = last30.map(({ positive }) => positive);

  console.log(dates);
  console.log(positives);

  makeChart(dates, positives);
};
