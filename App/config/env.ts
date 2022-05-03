import Constants from "expo-constants";

const config = {
  API_URL: "http://192.168.178.53:5001/api/v1",
};

const getEnvVars = (env = Constants.manifest) => {
  return config;
};

export default getEnvVars();
