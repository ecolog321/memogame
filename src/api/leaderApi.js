export const getLeaders = async () => {
  const repsonse = await fetch("https://wedev-api.sky.pro/api/v2/leaderboard", {
    method: "GET",
  });
  if (!repsonse.status) {
    throw new Error(repsonse.message);
  }
  const responseData = await repsonse.json();
  return responseData;
};

export const addLeader = async (name, time, achievements) => {
  const repsonse = await fetch("https://wedev-api.sky.pro/api/v2/leaderboard", {
    method: "POST",
    body: JSON.stringify({
      name,
      time,
      achievements,
    }),
  });
  if (!repsonse.status) {
    throw new Error(repsonse.message);
  }
  const responseData = await repsonse.json();
  return responseData;
};
