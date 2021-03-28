export const _setStorage = (key: string, body: string) => {
    localStorage.setItem(key, body);
  };
  
  export const _getStorage = (key: string) => {
    const boby = localStorage.getItem(key);
    try {
      return JSON.parse(boby);
    } catch (error) {
      return boby;
    }
  };
  
  export const _deleteStorage = (key: string) => {
    localStorage.removeItem(key);
  };
  
  export const _deleteAllStorage = () => {
    localStorage.clear();
  };
  