import { usersSelector, statusSelector } from './../store/users/users.selector';
import { getUsers } from './../store/users/users.action';
import { User } from './../model/user.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppUserState } from '../store/app.state';
import { vmFromLatest } from 'src/app/core/utils/operators.util';
import { map, first } from 'rxjs/operators';

interface UsersListVm {
  users: User[];
  isLoading: boolean;
  // sort?: 'asc' | 'desc';
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  vm$: Observable<UsersListVm>;
  status$
  constructor(private store: Store<AppUserState>) {}

  ngOnInit(): void {
    this.store.dispatch(getUsers());
    this.vm$ = vmFromLatest<UsersListVm>({
      users: this.store.pipe(select(usersSelector)),
      isLoading: this.store.pipe(
        select(statusSelector),
        map((status) => status === 'loading')
      ),
    });
    
  }
  // LoadAdminList = async () => {
  //   this.vcr.clear();
  //   const { ListComponent } = await import('./admin/list/list.component');
  //   this.vcr.createComponent(this.cfr.resolveComponentFactory(ListComponent));
  // };
  // LoadUsersList = async () => {
  //   this.vcr.clear();
  //   const { ListComponent } = await import('./users/list/list.component');
  //   this.vcr.createComponent(this.cfr.resolveComponentFactory(ListComponent));
  // };
  onSubmit = (_data) => {
    console.log('_data', _data);
  };
  CallState = () => {
    this.vm$.subscribe((vm) => {
      console.log(vm.users, 'Data');
    });
    // console.log({
    //   users: this.store.pipe(select(usersSelector)),
    //   isLoading: this.store.pipe(
    //     select(statusSelector),
    //     map((status) => status === 'loading')
    //   ),
    // });
  };
  onSubmitPTB2 = (_data: InputValuePT) => {
    console.log(_data);
    console.log('C', _data.c);
    if (_data.a && _data.b && _data.c) {
      if (_data.a != 0) {
        let Detal = Math.pow(_data.b, 2) - 4 * _data.a * _data.c;
        if (Detal > 0) {
          let n1 = (-1 * _data.b + Math.sqrt(Detal)) / (2 * _data.a);
          let n2 = (-1 * _data.b - Math.sqrt(Detal)) / (2 * _data.a);
          alert(n1 + 'and' + n2);
        } else if (Detal == 0) {
          alert((-1 * _data.b) / (2 * _data.a));
        } else {
          alert('VNghiem');
        }
      } else {
        // switch (_data) {
        //   case _data.b == 0 && _data.c == 0:
        //     alert('VSN');
        //     break;
        //   case _data.b == 0 && _data.c != 0:
        //     alert('VN');
        //     break;
        //   case _data.b != 0 && _data.c != 0:
        //     alert('1 Nghiem' + (_data.c * -1) / _data.b);
        //     break;
        //   default:
        //     break;
        // }
      }
    } else {
      alert('A or B or C chưa được nhập');
    }
  };
}
interface InputValuePT {
  a: number;
  b: number;
  c: number;
}
