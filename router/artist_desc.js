module.exports = (req, res, createWebAPIRequest, request) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const id = req.query.id;
  const data = {
    id,
    csrf_token: ""
  };
  createWebAPIRequest(
    "music.163.com",
    `/weapi/artist/introduction`,
    "POST",
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send("fetch error")
  );
};
