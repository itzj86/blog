# <center>angular8 学习笔记</center>
## 安装
```
// 全局安装
npm install @angular/cli -g
// 局部安装
npm install @angular/cli -g
npx ng new 项目名称
```
## 安装过程说明
> 安装中，需要注意选择是否添加路由，选择 "y"
- UI 可以使用谷歌自家的 @angular/material
> 通过以下命令进行UI组件的安装
```
 npx ng add @angular/material 
```
> 安装中，会选择添加 hammerjs 选择 "y"  
> 安装完成后，需要用到什么模块，直接在 **app.module.ts** 添加,例如：
```js
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
// 并在imports中注入模块
imports: [
    ...
    MatButtonModule,
    MatIconModule
],
```
> UI组件使用说明  
> 上面注入后，则可以全局使用改UI组件了，如在HomeComponents中：
```html
<button mat-button color="warn">按钮</button>
<button mat-icon-button><mat-icon>home</mat-icon></button>
```
## 路由 router 使用说明
> 添加有路由的项目后，会在根目录app目录下有 <font color="red">**app-routing.module.ts**</font>  
> 里面有个 **routes** 就在这里没配置路由  
> 要配置什么路由，则需要把该路由对应的组件import
```js
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  ...
  {path: 'home', component: HomeComponent},
  // 未配置的路由拦截
  {path: '**', component: HomeComponent},
  {path: '**', redirectTo: "home"},
];
```
[nodejs](./nodejs.md)
