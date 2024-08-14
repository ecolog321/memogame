export const getLeaders = async () => {
  const repsonse = await fetch("https://wedev-api.sky.pro/api/leaderboard", {
    method: "GET",
  });
  if (!repsonse.status) {
    throw new Error(repsonse.message);
  }
  const responseData = await repsonse.json();
  console.log(responseData);
  return responseData;
};

export const addLeader = async (name, time) => {
  const repsonse = await fetch("https://wedev-api.sky.pro/api/leaderboard", {
    method: "POST",
    body: JSON.stringify({
      name,
      time,
    }),
  });
  if (!repsonse.status) {
    throw new Error(repsonse.message);
  }
  const responseData = await repsonse.json();
  console.log(responseData);
  return responseData;
};
