import {makeAutoObservable} from './mobx';

class State {
    username;
    constructor() {
        this.username = 'Guest';
        makeAutoObservable(this);
    }
}

export default new State();
