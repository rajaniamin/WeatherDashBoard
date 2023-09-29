import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'; // Import environment
import { Environment } from 'src/environments/environment'; // Import Environment type

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string) {
    const environmentConfig: Environment = environment;
    this.http.get(environmentConfig.weatherApiBaseUrl, {
      headers: new HttpHeaders()
        .set(environmentConfig.XRapidAPIHostHeaderName, environmentConfig.XRapidAPIHostValue)
        .set(environmentConfig.XRapidAPIHeaderName, environmentConfig.XRapidAPIValue),
        params : new HttpParams()
        .set('q',cityName)
        .set('units','metric')
        .set('mode','json')
    }).subscribe(
      (data) => {
        console.log('Weather data:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
