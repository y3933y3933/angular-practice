# Pages
## 學習內容
### custom directives
* ```ng g d <name>```
#### class
* ```ElementRef```：取得使用指令的當前元素ref
* ```ElementRef.nativeElement```:操作DOM
* ```set xxx()```方法：當該屬性被指派時會執行內容，可避免undefined
* ```@Input('name') set othername```:()內的名稱為綁定在元素上的名稱，但可以另外命名。
* template使用指令的方式：
  1.  ```<div directive>```
  2.  ```<div [directive]=""></div>```: ""內為Input()接收的參數。
#### 結構型指令
* ```viewContainerRef```:這是啥不太清楚
* ```templateRef```:可以取得container內的html元素

```
@Input('appTimes') set render(times: number) {
    this.viewContainer.clear(); //clear out everything inside
    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: i,
      });
      // template ref : Html inside
    }
  }

```
* ```{}```內的值，就是template中可以使用```let XX = key```
