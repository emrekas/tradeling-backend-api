import axios from 'axios';
import { RecurrenceRule, scheduleJob } from 'node-schedule';

class StationSyncJob {
  public syncIndego() {
    const rule = new RecurrenceRule();
    rule.hour = 0;
    scheduleJob(rule, async () => {
      await axios.get('http://localhost:3000/api/v1/indego-data-fetch-and-store-it-db');
    });
  }
}

export default new StationSyncJob();
