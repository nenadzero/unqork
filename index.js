const axios = require("axios");

module.exports = class Unqork {
  #username;
  #password;
  #environment;
  #token = null;
  #expiresAt = null;
  constructor(username, password, environment) {
    this.#username = username;
    this.#password = password;
    this.#environment = environment;
  }

  async #checkToken() {
    if (!this.#token || !this.#expiresAt || this.#expiresAt < Math.floor(Number(new Date() / 1000)) + 240) {
      await this.#getToken();
      return this.#token;
    } else {
      return this.#token;
    }
  }

  async #getToken() {
    const response = await axios.post(
      "https://" + this.#environment + ".unqork.io/api/1.0/oauth2/access_token",
      new URLSearchParams({
        grant_type: "password",
        username: this.#username,
        password: this.#password,
      })
    );
    this.#token = response.data.access_token;
    this.#expiresAt = response.data.expires_in + Math.floor(Number(new Date() / 1000));
  }

  async #get(path) {
    const response = await axios.get("https://" + this.#environment + ".unqork.io/api/1.0" + path, {
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
      headers: {
        Authorization: "Bearer " + (await this.#checkToken()),
      },
    });
    return response.data;
  }

  async #put(path, json) {
    const response = await axios.put(
      "https://" + this.#environment + ".unqork.io/api/1.0" + path,
      { ...json },
      {
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        headers: {
          Authorization: "Bearer " + (await this.#checkToken()),
        },
      }
    );
    return response.data;
  }

  async getSubmission(moduleId, submissionId) {
    return await this.#get("/modules/" + moduleId + "/submissions/" + submissionId);
  }

  async updateSubmission(moduleId, submissionId, json) {
    return await this.#put("/modules/" + moduleId + "/submissions/" + submissionId, json);
  }

  async execute(moduleId, json) {
    return await this.#put("/modules/" + moduleId + "/execute", json);
  }
};
