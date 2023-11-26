import axios from "axios";
import { EventTracking, MatomoCofig, UserInfo } from "../models";
export const matomoTrackingEventService = (matomoCofig: MatomoCofig, userInfo: UserInfo, eventTracking: EventTracking) => {
    const body = {
          idsite: matomoCofig.idSite,
          rec: 1,
          apiv: 1,
          send_image: 0,
          ...userInfo,
          ...eventTracking
        }
      return axios.post(matomoCofig.trackUrl, body, {
          headers: {
            'Accept': 'application/json',
            //'Accept-Language': userInfo.lang,
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'     
          }}
        )
        .then((response) => {
          if (!response.status) {
            throw Error(response.statusText);
          }
          console.log('Matomo tracking is sent:', matomoCofig.trackUrl, body);
  
          return response;
        })
        .catch((error) => {
          console.log('Matomo tracking is not sent:', matomoCofig.trackUrl, body);
  
          console.warn('Matomo tracking error:', error);
  
          return error;
        });
}