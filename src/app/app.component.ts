import {
  Component,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentFactory,
} from '@angular/core'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BasicSource';
  constructor(
    private vcr: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {}
  LoadAdminList = async () => {
    this.vcr.clear();
    const { ListComponent } = await import('./admin/list/list.component');
    this.vcr.createComponent(this.cfr.resolveComponentFactory(ListComponent));
  };
  LoadUsersList = async () => {
    this.vcr.clear();
    const { ListComponent } = await import('./users/list/list.component');
    this.vcr.createComponent(this.cfr.resolveComponentFactory(ListComponent));
  };
  onSubmit = (_data) => {
    console.log('_data', _data);
  };
}
