export const getCovidApi = async () => {
  const resp = await axios.get(
    "https://api.covidtracking.com/v1/states/tx/daily.json"
  );

  return resp;
};
