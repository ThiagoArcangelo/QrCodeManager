const qrcode = require("qrcode");

exports.post = async (req, res) => {
  //   const getUrl = req.body;
  const getUrl = "www.google.com";

  qrcode.toDataURL(getUrl, (err, url) => {
    console.log(url);
  });
};
