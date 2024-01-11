const VideoService = require("../services/videoservice");
const { createResponse, createError } = require("../utiils/helper");

class videoController {
  /**
   * @description signup new user
   */
  async uploadVideo(req, res) {
    try {
      const isValid = await VideoService.uploadVideo(req);
      if (isValid) {
        createResponse(res, true, "upload successfully ...", isValid);
      } else {
        createResponse(res, false, "Error upload");
      }
    } catch (e) {
      createError(res, e);
    }
  }
  /**
   * @description Add Subtitles
   */
  async addSubtitles(req, res) {
    try {
      const isValid = await VideoService.addSubtitles(req);
      if (isValid) {
        createResponse(res, true, "Add successfully ...", isValid);
      } else {
        createResponse(res, false, "Error to add subtitles");
      }
    } catch (e) {
      createError(res, e);
    }
  }
  /**
   * @description Get All Videos
   */
  async getAllVideos(req, res) {
    try {
      const isValid = await VideoService.getAllVideos(req);
      if (isValid) {
        createResponse(res, true, "Get successfully ...", isValid);
      } else {
        createResponse(res, false, "Error to get subtitles");
      }
    } catch (e) {
      createError(res, e);
    }
  }
  /**
   * @description Delete Video
   */
  async deleteVideo(req, res) {
    try {
      const isValid = await VideoService.deleteVideo(req);
      if (isValid) {
        createResponse(res, true, "Delete successfully ...", isValid);
      } else {
        createResponse(res, false, "Error to Delete Video");
      }
    } catch (e) {
      createError(res, e);
    }
  }
}

module.exports = new videoController();
