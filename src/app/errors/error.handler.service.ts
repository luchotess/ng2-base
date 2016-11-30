import { Injectable }   from '@angular/core';
import { HttpError }    from "./http/http-error.model";
import { StateService } from "ui-router-ng2";

declare let $:any;

@Injectable()
export class ErrorHandlerService {
  errorMap: any = {
    getRules: {
      500: 'app.error-mmc-not-working'
    },
    getUtilities : {
      500: 'app.error-mmc-not-working'
    },
    getOffers: {
      404: 'app.error-no-offers',
      500: 'app.error-mmc-not-working'
    }
  };

  defaultErrorState: string = 'app.error-mmc-not-working';

  constructor(private StateService: StateService) {}

  handlerError (httpError: HttpError) {
    this.StateService.go(this.errorMap[httpError.context][httpError.code] ?
      this.errorMap[httpError.context][httpError.code] :
      this.defaultErrorState
    );
  }
}
