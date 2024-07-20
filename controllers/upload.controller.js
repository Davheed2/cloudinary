const uploadService = require("../services/upload.service.js");

module.exports = class {
  static async upload(req, res, next) {
    try {
      const uploadFile = await uploadService.upload(req.file);
      return res.status(200).json(uploadFile);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  static async getUpload(req, res, next) {
    try {
      const getUpload = await uploadService.getUpload();
      return res.status(200).json(getUpload);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
};
