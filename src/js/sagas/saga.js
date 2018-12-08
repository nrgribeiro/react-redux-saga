import { fork } from 'redux-saga/effects'

import mySaga from "./articles";
import tokenSaga from "./auth";

function* rootSaga () {
    yield [
        fork(mySaga), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
        fork(tokenSaga),
    ];
}

export default rootSaga;