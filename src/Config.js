const config = {};

Object.keys(process.env).forEach((value) => {
  if (value.startsWith("REACT_APP_")) {
    config[value.slice(10)] = process.env[value] || "";
  }
});

config["isProdEnv"] = config.ENV === "prod";

export default config;
