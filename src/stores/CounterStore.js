import {observable, action, autorun, reaction, when,makeObservable} from 'mobx';

class CounterStore{
	@observable count = 1;

	constructor(){
		makeObservable(this);
	}

	@action decrement = () => {
		this.count--;
	}

	@action increment = () => {
		this.count++;
	}


}

export default new CounterStore()