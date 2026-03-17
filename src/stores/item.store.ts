import { makeAutoObservable } from 'mobx'

class ItemStore {
  private _is_open_modal: boolean = false;
  private _current_item_id: number | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get is_open_modal() {
    return this._is_open_modal;
  }

  get current_item_id() {
    return this._current_item_id;
  }

  set current_item_id(id: number | null) {
    this._current_item_id = id;
  }

  set is_open_modal(is_open_modal: boolean) {
    this._is_open_modal = is_open_modal;
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
