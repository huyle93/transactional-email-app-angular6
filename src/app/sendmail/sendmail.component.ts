import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs';

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.css']
})
export class SendmailComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }
  public sendEmail() {

    // let url = `YOUR CLOUD FUNCTION URL` 
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    let options: RequestOptions = new RequestOptions({ headers: headers });

    params.set('to', 'huyle.finance@gmail.com');
    params.set('from', 'huyletech@yahoo.com');
    params.set('subject', 'test-email');
    params.set('content', 'Hello World');

    return this.http.post(url, params, options)
      .toPromise()
      .then( res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })

  }


}
