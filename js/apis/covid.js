const covidApi = "https://api.covidtracking.com/v1";

export const getCovidApi = async () => {
  const resp = await axios.get(`${covidApi}/states/tx/daily.json`);
  return resp;
};
