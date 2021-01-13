import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'At School',
      url:
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'At Home',
      url:
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'play badminton',
      url:
        'https://images.unsplash.com/photo-1599391398131-cd12dfc6c24e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmFkbWludG9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'At School',
      url:
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'At Home',
      url:
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'play badminton',
      url:
        'https://images.unsplash.com/photo-1599391398131-cd12dfc6c24e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmFkbWludG9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'At School',
      url:
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'At Home',
      url:
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'play badminton',
      url:
        'https://images.unsplash.com/photo-1599391398131-cd12dfc6c24e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmFkbWludG9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
    },
    {
      title: 'At School',
      url:
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'At Home',
      url:
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'play badminton',
      url:
        'https://images.unsplash.com/photo-1599391398131-cd12dfc6c24e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmFkbWludG9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    },
  ];
  checkWindowIndex(index:number): boolean {
    return Math.abs(this.currentPage-index)<5;
  }
}
