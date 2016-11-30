import { Injectable }           from '@angular/core';
import { Http }                 from '@angular/http';
import { Observable }           from 'rxjs/Observable';
import { APIHelper }            from '../../shared/api/api.helpers';
import { APIResolve }           from "../../shared/api/api.resolve";
import { ErrorHandlerService }  from "../../errors/error.handler.service";

@Injectable()
export class StartService {
  private rest = {
    zipcode: {
      getRules : 'acquisition/external/zipcode/rulesbydefault'
    }
  };

  constructor (private http: Http,
               private APIResolve: APIResolve,
               private ErrorHandlerService: ErrorHandlerService) {}

  getRules () {
    return this.http.get(this.APIResolve.resolve(this.rest.zipcode.getRules))
      .map(APIHelper.extractData)
      .catch((res: any): Observable<any> => {
        this.ErrorHandlerService.handlerError({
          code    : res.status,
          context : 'getRules'
        });

        return Observable.throw(new Error(res.status));
      });
  }
}
