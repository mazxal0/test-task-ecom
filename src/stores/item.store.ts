import { makeAutoObservable } from 'mobx'

class ItemStore {
  private is_open_modal: boolean = false;
  private current_item_id: number | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  open_modal(id: number) {
    this.current_item_id = id;
    this.is_open_modal = true;
  }

  exit_modal() {
    this.is_open_modal = false;
    this.current_item_id = null;
  }

}

export const itemStore = new ItemStore();
