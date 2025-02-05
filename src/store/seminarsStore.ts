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
      deleteSeminar: action,
    });
  }

  fetchSeminarsData = async () => {
    this.isLoading = true;
    this.errorMessage = null;

    try {
      const response = await axios.get("http://localhost:5000/seminars"); // json-server API
      runInAction(() => {
        this.seminarsData = response.data;
      });
    } catch (error) {
      runInAction(() => {
        this.errorMessage = `Ошибка загрузки данных: ${error}`;
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  deleteSeminar = async (id: number) => {
    this.isLoading = true;
    this.errorMessage = null;

    try {
      await axios.delete(`http://localhost:5000/seminars/${id}`);
      this.fetchSeminarsData();
    } catch (error) {
      runInAction(() => {
        this.errorMessage = `Не получилось удалить. Ошибка сервера: ${error}`;
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };
}

export default new SeminarsStore();
