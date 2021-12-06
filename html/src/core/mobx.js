import {
    makeAutoObservable as oMakeAutoObservable,
    autorun as oAutorun,
    intercept as oIntercept
} from 'mobx/dist/mobx.esm.production.min.js';

export const makeAutoObservable = oMakeAutoObservable;
export const autorun = oAutorun;
export const intercept = oIntercept;
