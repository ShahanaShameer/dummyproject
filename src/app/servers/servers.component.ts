import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-servers',
  // template: `
  // <app-server></app-server>
  //         <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  constructor() {
    // setTimeout(() => {
    //   this.allowNewServer = true;
    // }, 2000);

    // Another, more efficient way to use timer
    timer(2000).subscribe(() => {
      this.allowNewServer = true;
    });
  }

  ngOnInit(): void {}
  onCreateServer() {
    this.serverCreationStatus = 'server was created';
  }
  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
