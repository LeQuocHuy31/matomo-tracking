export interface MatomoCofig {
    baseUrl: string;
    trackUrl: string;
    idSite: number;
}

export interface UserInfo {
    urlref: string;
    res: string;
    h: number;
    m: number;
    s: number;
    cookie?: number;
    ua?: string;
    uadate?: string;
    lang?: string;
    uid: string;
    cid?: string;
    new_visit: number;
    dimension?: any;
    _cvar?: any;
}

export interface RecommendedParameters {
    action_name?: string;
    url: string;
    _id?: string;
    rand?: string;
    apiv?: number;
}

export interface EventTracking extends RecommendedParameters {
    e_c: string;
    e_a: string;
    e_n?: string;
    e_v?: number;
}