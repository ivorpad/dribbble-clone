const shortid = require("shortid");
const mkdirp = require("mkdirp");
const { createWriteStream } = require("fs");
const uploadDir = "public/uploads";

mkdirp.sync(uploadDir);

const storeUpload = async ({ stream, filename }) => {
  const id = shortid.generate();
  const path = `${uploadDir}/${id}-${filename}`;

  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path))
      .on("finish", () => resolve({ id, path }))
      .on("error", reject)
  );
};

const processUpload = async (upload, db) => {
  const { stream, filename, mimetype, encoding } = await upload;
  const { id, path } = await storeUpload({ stream, filename });

  const file = `${id}-${filename}`;

  return file;
};

module.exports = {
  processUpload,
  storeUpload
};
