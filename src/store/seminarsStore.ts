import axios from "axios";
import { action, makeObservable, observable, runInAction } from "mobx";

import { SeminarsData } from "@/types/types";

class SeminarsStore {
  isLoading = false;
  errorMessage: string | null = null;
  seminarsData: SeminarsData = [];

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      errorMessage: observable,
      seminarsData: observable,
      fetchSeminarsData: action,
    });
  }

  fetchSeminarsData = async () => {
    this.isLoading = true;
    this.errorMessage = null;

    try {
      const response = await axios.get("/data/seminars.json");
      runInAction(() => {
        this.seminarsData = response.data.seminars;
      });
    } catch (error) {
      runInAction(() => {
        this.errorMessage = "Ошибка загрузки данных";
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };
}

export default new SeminarsStore();