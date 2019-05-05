import {Request, Response, TransportError} from 'lean-client-js-core';
import {LeanJsOpts} from './inprocess';

export interface StartWorkerReq {
    command: 'start-webworker';
    opts: LeanJsOpts;
}

export interface LoadZipReq {
    command: 'load-zip';
    url: string;
}

export type Req = StartWorkerReq | LoadZipReq | Request;

export interface ErrorRes {
    response: 'webworker-error';
    error: TransportError;
}

export type Res = ErrorRes | Response;
