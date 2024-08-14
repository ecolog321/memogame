export const getLeaders = async () => {
  const repsonse = await fetch("https://wedev-api.sky.pro/api/leaderboard", {
    method: "GET",
  });
  if (!repsonse.status) {
    throw new Error(repsonse.message);
  }
  return repsonse.json().then(data => data.leaders);
};

export const addLeader = async ({ name = "Пользователь", time }) => {
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
  return repsonse.json().then(data => data.leaders);
};
