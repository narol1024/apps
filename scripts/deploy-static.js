require("dotenv").config();

const { deploy } = require("sftp-sync-deploy");

deploy({
  host: process.env.SFTP_HOST,
  port: 22,
  username: "root",
  password: process.env.SFTP_PWD,
  localDir: "out",
  remoteDir: "/root/apps-hall",
})
  .then(() => {
    console.log("success!");
  })
  .catch((err) => {
    console.error("error! ", err);
  });
