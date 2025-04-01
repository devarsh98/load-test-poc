import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 100, // 100 virtual users (concurrent requests)
  duration: '30s', // Run for 30 seconds
};

export default function () {
  http.get('http://127.0.0.1:8080/hello');
  sleep(0.1); // Small delay to simulate realistic pacing
}