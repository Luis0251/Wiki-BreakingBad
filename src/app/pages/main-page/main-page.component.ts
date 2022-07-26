import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
environment
import {HttpClient} from '@angular/common/http';
import { Personaje } from 'src/app/interface/Personajes';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
personajes : Personaje[]  | undefined;
personajeCopy:Personaje[] | undefined;
  constructor(public client: HttpClient) {
    this.getData();
   }

   async getData() {
    await this.client.get<any>(environment.apiUrl + "/characters").subscribe((res)=>{
      console.table(res);
      this.personajes = res.map(({char_id, name, nickname,img,status,ocuppation}:Personaje) => {
        return {
          char_id: char_id,
          name: name,
          nickname: nickname,
          img:img,
          status: status,
          ocuppation:ocuppation,
        }
      })
      this.personajeCopy = this.personajes;
    })
   }

  filter(e: any): void {
    const search : string = e.target.value;
    this.personajes = this.personajeCopy?.filter(({name}:Personaje)=>{
      return name.toLowerCase().includes(search.toLowerCase());
    });
  }

}
