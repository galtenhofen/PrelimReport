import { Injectable, Component, Input, Output } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {IEncounter} from './encounter';
import {IResponse} from './response';
import 'rxjs/Rx'; 

// import 'rxjs/add/operator/do';  // for debugging

/**
 * This class provides the Encounter service with methods to read names and add names.
 */
@Injectable()
export class EncounterService {
  loading:boolean; 
  private encounterUrl = '/assets'; 
  /**
   * Creates a new EncounterService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) {this.loading=false;}

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  getEncounters(dfgid:string): Observable<IResponse> {
    return this.http.get('/assets/encounters.json')
                    .finally( () => this.loading = false)
                    //.do(data=> console.log("IN getEncounters:  " + JSON.stringify(data)))
                    .do(data=> console.log("IN getEncounters:  " + data))
                    .map((res: Response) => <IResponse>res.json())
                    .catch(this.handleError);
  }

   postReportList(reports:any) {
                console.log('IN postUpdates  updates: ' + reports);
                let body = JSON.stringify(reports);
                let headers = new Headers({ 'Content-Type': 'application/json' });
                let options = new RequestOptions({ headers: headers });

                return this.http.post(this.encounterUrl , body, options)
                    .do(data => console.log("POST Response: " + JSON.stringify(data)))
                    .map(this.checkResponseStatus)
                    .catch(this.handleError);
                    }


    private checkResponseStatus(res: Response) {
            let status:any;

            // check if empty, before call json
             if (res.status) {
                status = res.status;
                }
            console.log('IN  checkResponseStatus STATUS:' + status);
            return status || {};
        }

  /**
    * Handle HTTP error
    */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

