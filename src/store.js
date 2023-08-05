import React,{createContext} from "react";
import {makeAutoObservable} from "mobx";


class Store {
message ="";
    constructor(){
        makeAutoObservable(this)
    }
inputMessage(){
    return this.message
}

}

export const  myStore = new Store;
export const storeContext = createContext(myStore);