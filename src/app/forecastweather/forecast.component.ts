import {Component} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
@Component({
  selector:"forecast",
  templateUrl:"./forecast.component.html"
})
export class ForecastComponent{
  weathers:any = [];
  constructor(private http: HttpClient) {}
  ngOnInit(){
    let url = "https://api.openweathermap.org/data/2.5/forecast";
    let parameters = new HttpParams();
    parameters = parameters.append("q","Hanoi,vietnam");
    parameters = parameters.append("appid","09a71427c59d38d6a34f89b47d75975c");
    parameters = parameters.append("units","metric");
    this.http.get(url,{
      params:parameters
    }).subscribe((rs:any)=>{
      let list = rs.list;
      for(var i=0;i<list.length;i++){
        var w = {
          time:  list[i].dt_txt,
          temp:  list[i].main.temp,
          hump: list[i].main.humidity,
          press: list[i].main.pressure,
          desc:  list[i].weather[0].description,
          icon:  list[i].weather[0].icon,
        }
        this.weathers.push(w);
      }
    })
  }
}
