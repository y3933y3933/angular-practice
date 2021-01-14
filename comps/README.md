# Comps

## 學習

### routing

#### Creating a module

- `ng new <app name> --routing`
- `ng g m <module name> --routing`

#### module

- `declarations`: 使用到ㄉ components、pipes、directives
- `imports`:使用到ㄉ Module
- `exports`:給外部使用ㄉ components、pipes、directives

#### Adding Routing

- `const routes:Routes = [{path:'',component:Component}]`
- `<router-outlet>`:秀出 router 畫面

#### RouterLink

- `routerLink = ''`
- `routerLinkActive=class`:設定 routerLinkActive 時的樣式
  - ```[routerLinkActiveOptions]="{exact:true}"```:路徑完全符合。
    example for CollectionsHome(route: localhost:4200/collections/CollectionsHome)
- `./`:`localhost:4200/collections`
- `/`:`localhost:4200`
- `../hi`:`localhost:4200/hi`
- `Boo`:`localhost:4200/collections/Boo`
- `./Boo`:`localhost:4200/Boo`
#### Not Found
* ```path:'**'```
* 路徑從上到下匹配，故要
#### Lazy Loading
* 在使用到該Module路徑ㄉRouting Module設定
* ```{path:'',loadChildren:()=>import(module path).then(m=>m.Module);}```

#### Child Routes
* ```{path:'',component:'', children:[寫在這裡]}```
### ng-content
* 放在子組件內，當父組件內插入值時會對應到子組件的```<ng-content></ng-content>```
* ```<ng-content select="">```: select內可放css selector，如：```.className```，```[property]```
### CSS
* ```:empty```:隱藏內容為空ㄉhtml
  