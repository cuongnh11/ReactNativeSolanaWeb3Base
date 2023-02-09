import {MMKV} from "react-native-mmkv";

class LocalStorage {
  storage: MMKV;

  constructor() {
    this.storage = new MMKV();
  }

  setItem(key: string, value: string) {
    this.storage.set(key, value);
  }

  getItem(key: string) {
    return this.storage.getString(key);
  }
}

export const localStorage = new LocalStorage();
