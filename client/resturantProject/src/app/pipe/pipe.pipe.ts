import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
@Pipe({
  name: 'nameUserByID'
})
export class NameUserByIDPipe implements PipeTransform {
  constructor(private http: UserService) {}

  transform(value: number): string {

        
       var x= this.http.userNameAndId.find(s => s .id === value).name;
       console.log(x)
       return x;

  }

}

