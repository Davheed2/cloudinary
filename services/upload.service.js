const { v2: cloudinary } = require("cloudinary");

module.exports = class {
  static async getUpload() {
    try {
      let output = { flag: false, message: "", data: {} };

      output.message = "File uploaded successfully";
      output.flag = true;
      return output;
    } catch (err) {
      console.log(err);
    }
  }

  static async upload(file) {
    try {
      let output = { flag: false, message: "", data: {} };
      const { path } = file;

      if (!path) {
        throw new Error("No file provided");
      }

      const result = await cloudinary.uploader.upload(path);

      output.message = "File uploaded successfully";
      output.flag = true;
      output.data = result;
      return output;
    } catch (err) {
      console.log(err);
      throw new Error("File upload failed");
    }
  }
};
