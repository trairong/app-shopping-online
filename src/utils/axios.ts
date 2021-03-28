import axios from "axios";
import { IFromResponses } from "../types";

const _post = async (
  url: string,
  body?: any,
  config?: any
): Promise<IFromResponses<any>> => {
  return new Promise((resolve) => {
    axios.post(url, body, config).then(
      (result) => {
        resolve(result.data);
      },
      (error) => {
        try {
          resolve(error.response.data);
        } catch (error) {
          resolve(error);
        }
      }
    );
  });
};

const _get = async (
  url: string,
  config?: any
): Promise<IFromResponses<any>> => {
  return new Promise((resolve) => {
    axios.get(url, config).then(
      (result) => {
        resolve(result.data);
      },
      (error) => {
        try {
          resolve(error.response.data);
        } catch (error) {
          resolve(error);
        }
      }
    );
  });
};

const _getFile = async (url: string, config?: any) => {
  return new Promise((resolve) => {
    axios.get(url, { ...config, responseType: "arraybuffer" }).then(
      (result) => {
        resolve(result.data);
      },
      (error) => {
        try {
          resolve(error.response.data);
        } catch (error) {
          return null;
        }
      }
    );
  });
};

const _delete = async (
  url: string,
  config?: any
): Promise<IFromResponses<any>> => {
  return new Promise((resolve) => {
    axios.delete(url, config).then(
      (result) => {
        resolve(result.data);
      },
      (error) => {
        try {
          resolve(error.response.data);
        } catch (error) {
          return null;
        }
      }
    );
  });
};

export { _get, _post, _delete, _getFile };
