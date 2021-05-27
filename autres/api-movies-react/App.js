const moment = require("moment");

const today = moment().format("YYYY-MM-DD");

const lastWeek = moment().subtract(7, "days").format("YYYY-MM-DD");

const urlWeekly =
  "http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=" +
  lastWeek +
  "&primary_release_date.lte=" +
  today +
  "&api_key=e441f8a3a151d588a4932d2c5d310769";

// `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${lastWeek}primary_release_date.lte=${today}&api_key=e441f8a3a151d588a4932d2c5d310769`;

module.exports = { urlWeekly };
