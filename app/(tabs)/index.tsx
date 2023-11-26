import { StyleSheet, TouchableHighlight } from 'react-native';

import { Text, View } from '../../components/Themed';
import { EventTracking, MatomoCofig, UserInfo } from '../matomoTracking/models';
import { matomoTrackingEventService } from '../matomoTracking/services/MatomoTrackingService';

export default function TabOneScreen() {
  const matomoConfig: MatomoCofig = {
    trackUrl: "https://huylequoc13.matomo.cloud/matomo.php",
    baseUrl: "https://huylequoc13.matomo.cloud/",
    idSite: 1
  };
  const userInfo: UserInfo = {
    h: 7,
    m: 40,
    s: 1,
    res: "720*1280",
    new_visit: 0,
    uid: "e84b0f68-138f-41d6-89d5-314c5c8878c3",
    urlref: ""
  };
  const eventTracking: EventTracking = {
    e_a: "Test action 1",
    e_c: "Test category",
    e_n: "Test name",
    e_v: 103,
    url: "https://huylequoc13.matomo.cloud/",
    action_name: "New Action"
  }
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => {
          matomoTrackingEventService(matomoConfig, userInfo, eventTracking)
      }}>
        <Text>Send data to Matomo</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
