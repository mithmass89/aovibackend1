const cors = require('cors');
const functionOutlet = require('./query');
const express = require("express");
const bodyParser = require("body-parser");
const { response } = require('express');
const app = express();
// parse requests of content-type: application/json
app.use(bodyParser.json());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.post('/query', function (req, res) {
    createQuery(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/addoutlet', function (req, res) {
    createDB(req.body, function (result, req) {
    });
    insertOutlet(req.body, function (result, req) {
        res.status(200).send(result);
    });

});

app.post('/insertdetail', function (req, res) {
    insertDetail(req.body, function (result, req) {
        res.status(200).send(result);
    });

});

app.post('/insertpayment', function (req, res) {
    insertPayment(req.body, function (result, req) {
        res.status(200).send(result);
    });

});

app.post('/addoutletuser', function (req, res) {
    insertOutlet_User(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/additem', function (req, res) {
    insertProduct(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/category', function (req, res) {
    insertCategory(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/getitem', function (req, res) {
    getItem(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/getitemcode', function (req, res) {
    getItemByItemCode(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/getcashiersummary', function (req, res) {
    getCashierSummary(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/checktransno', function (req, res) {
    getTransno(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/getitembybarcode', function (req, res) {
    getItemByItemBarCode(req.body, function (result, req) {
        res.status(200).send(result);
    });
});



app.post('/detailtrno', function (req, res) {
    getTrnoData(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/detailpayment', function (req, res) {
    getDetailPyTrno(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/sumtrans', function (req, res) {
    getsumTrans(req.body, function (result, req) {
        res.status(200).send(result);
    });
});


app.post('/addtrtpcd', function (req, res) {
    insertTrtp(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/insertpromo', function (req, res) {
    insertPromo(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/insertCondimentMaster', function (req, res) {
    insertCondiment_master(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/insertPosCondiment', function (req, res) {
    insertPosCondiment(req.body, function (result, req) {
        res.status(200).send(result);
    });
});



app.post('/insertMapping', function (req, res) {
    insertMapping_condiment(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/insert_transactiontype', function (req, res) {
    insert_transaksitipe(req.body, function (result, req) {
        res.status(200).send(result);
    });
});




app.post('/outlet_user', function (req, res) {
    getOutletUser(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/getUserinfofromManual', function (req, res) {
    getUserinfofromManual(req.body, function (result, req) {
        console.log(result);
        res.status(200).send(result);
    });
});

app.post('/getAccessUser', function (req, res) {
    getAccessUser(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/getctg', function (req, res) {
    getCTG(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/outstandingBill', function (req, res) {
    getOutstandingBill(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/condimentlist', function (req, res) {
    getCondimentLists(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/getCondimentItem', function (req, res) {
    getItemCondiment(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/getDetailCondimentTrno', function (req, res) {
    getDetailConidmentTrno(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/gettransaksiTipe', function (req, res) {
    getTransaksitipe(req.body, function (result, req) {
        res.status(200).send(result);
    });
});


app.post('/salestoday', function (req, res) {
    getSalesTodaySum(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/salesweekly', function (req, res) {
    getSales7daySum(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/salesmonthly', function (req, res) {
    getSalesMonthly(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/listdatachart', function (req, res) {
    listdataChart(req.body, function (result, req) {
        res.status(200).send(result);
    });
});






app.post('/getsumtrnopy', function (req, res) {
    getSummaryPyTrno(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/checkUserFromOauth', function (req, res) {
    checkUserFromOauth(req.body, function (result, req) {
        res.status(200).send(result);
    });
});



app.post('/promolist', function (req, res) {
    getPromoList(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/delctg', function (req, res) {
    delctg(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/delitem', function (req, res) {
    delitem(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/updateitem', function (req, res) {
    updateItem(req.body, function (result, req) {
        res.status(200).send(result);
    });
});



app.post('/updateUserGmail', function (req, res) {
    updateUserGmail(req.body, function (result, req) {
        res.status(200).send(result);
    });
});



app.post('/updatePosDetail', function (req, res) {
    updatePosdetail(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/updatePromo', function (req, res) {
    updatePromo(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/updateTrno', function (req, res) {
    updateTrnos(req.body, function (result, req) {
        res.status(200).send(result);
    });
});


app.post('/updateTrnoGuest', function (req, res) {
    updateguestTrnos(req.body, function (result, req) {
        res.status(200).send(result);
    });
});



app.post('/deactiveposdetail', function (req, res) {
    deactivePosdetail(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/deactivecondiment', function (req, res) {
    deactiveCondiment(req.body, function (result, req) {
        res.status(200).send(result);
    });
});


app.post('/deactiveposdetailTrans', function (req, res) {
    deactivePosdetailTrans(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/deactivepospaymentTrans', function (req, res) {
    deactivePospaymentTrans(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/delpromo', function (req, res) {
    delPromo(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/delpayment', function (req, res) {
    deactivePospaymentTrans(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/deactivepromoTrno', function (req, res) {
    deactivePromotrno(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/deactivecondimentbyid', function (req, res) {
    deactiveCondimentByID(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/deactiveCondimentByAll', function (req, res) {
    deactiveCondimentByAll(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/deactiveTipeTrans', function (req, res) {
    deactiveTipeTrans(req.body, function (result, req) {
        res.status(200).send(result);
    });
});


app.post('/updateCondiment', function (req, res) {
    updateCondimentTrno(req.body, function (result, req) {
        res.status(200).send(result);
    });
});










insertOutlet = function (info, callback, requests) {
    functionOutlet.outletcreate(info, callback);
}

insertOutlet_User = function (info, callback, requests) {
    functionOutlet.outlet_user(info, callback);

}

insertTrtp = function (info, callback, requests,) {
    functionOutlet.trantpInsert(info, callback, requests);
}

insertProduct = function (info, callback, requests) {
    functionOutlet.insertProduct(info, callback, requests);
}
insertCategory = function (info, callback, requests) {
    functionOutlet.categoryCreate(info, callback, requests);
}

insertDetail = function (info, callback, requests) {
    functionOutlet.insertDetail(info, callback, requests);
}

insertPayment = function (info, callback, requests) {
    functionOutlet.insertPayment(info, callback, requests);
}

insertPromo = function (info, callback, requests) {
    functionOutlet.insertPromo(info, callback, requests);
}

insertCondiment_master = function (info, callback, requests) {
    functionOutlet.condimentMasterCreate(info, callback, requests);
}

insertPosCondiment = function (info, callback, requests) {
    functionOutlet.insertPoscondiment(info, callback, requests);
}

insertMapping_condiment = function (info, callback, requests) {
    functionOutlet.mapping_Condiment(info, callback, requests);
}

insert_transaksitipe = function (info, callback, requests) {
    functionOutlet.insert_transaksitipe(info, callback, requests);
}






getOutletUser = function (info, callback, requests) {
    functionOutlet.getOutletUser(info, callback, requests);
}

checkUserFromOauth = function (info, callback, requests) {
    functionOutlet.checkUserFromOauth(info, callback, requests);
}

checkOutletUser = function (info, callback, requests) {
    functionOutlet.checkOutletUser(info, callback, requests);
}

getAccessUser = function (info, callback, requests) {
    functionOutlet.getAccessUser(info, callback, requests);
}

getUserinfofromManual = function (info, callback, requests) {
    functionOutlet.getUserinfofromManual(info, callback, requests);
}




getPromoList = function (info, callback, requests) {
    functionOutlet.getPromoList(info, callback, requests);
}

getItem = function (info, callback, requests) {
    functionOutlet.getProduct(info, callback, requests);
}
getItemByItemCode = function (info, callback, requests) {
    functionOutlet.getProductByItemcode(info, callback, requests);
}

getItemCondiment = function (info, callback, requests) {
    functionOutlet.getItemCondiment(info, callback, requests);
}

getItemByItemBarCode = function (info, callback, requests) {
    functionOutlet.getItemByBarcode(info, callback, requests);
}

getCTG = function (info, callback, requests) {
    functionOutlet.getCTG(info, callback, requests);
}

getCondimentLists = function (info, callback, requests) {
    functionOutlet.getCondimentList(info, callback, requests);
}

getTrnoData = function (info, callback, requests) {
    functionOutlet.getTrnoData(info, callback, requests);
}

getDetailConidmentTrno = function (info, callback, requests) {
    functionOutlet.getDetailCondimentTrno(info, callback, requests);
}
getsumTrans = function (info, callback, requests) {
    functionOutlet.getSumTrno(info, callback, requests);
}

getSummaryPyTrno = function (info, callback, requests) {
    functionOutlet.getSummaryPyTrno(info, callback, requests);
}

getDetailPyTrno = function (info, callback, requests) {
    functionOutlet.getDetailPyTrno(info, callback, requests);
}

getOutstandingBill = function (info, callback, requests) {
    functionOutlet.getOutstandingBill(info, callback, requests);
}

getSalesTodaySum = function (info, callback, requests) {
    functionOutlet.getSalesTodaySum(info, callback, requests);
}

getSales7daySum = function (info, callback, requests) {
    functionOutlet.getSales7daySum(info, callback, requests);
}

getSalesMonthly = function (info, callback, requests) {
    functionOutlet.getSalesMonthly(info, callback, requests);
}

listdataChart = function (info, callback, requests) {
    functionOutlet.listdataChart(info, callback, requests);
}

getCashierSummary = function (info, callback, requests) {
    functionOutlet.getCashierSummary(info, callback, requests);
}

getTransno = function (info, callback, requests) {
    functionOutlet.checkTransactionNo(info, callback, requests);
}

getTransaksitipe = function (info, callback, requests) {
    functionOutlet.getTransaksitipe(info, callback, requests);
}


createDB = function (info, callback, requests) {
    functionOutlet.createDB(info, callback, requests);
}





delctg = function (info, callback, requests) {
    functionOutlet.delCTG(info, callback, requests);
}

delitem = function (info, callback, requests) {
    functionOutlet.delitem(info, callback, requests);
}

updateCondimentTrno = function (info, callback, requests) {
    functionOutlet.updateCondimentTrno(info, callback, requests);
}

updateUserGmail = function (info, callback, requests) {
    functionOutlet.updateUserGmail(info, callback, requests);
}


delPromo = function (info, callback, requests) {
    functionOutlet.delPromo(info, callback, requests);
}


updateItem = function (info, callback, requests) {
    functionOutlet.updateItem(info, callback, requests);
}

updatePromo = function (info, callback, requests) {
    functionOutlet.updatePromo(info, callback, requests);
}

updateTrnos = function (info, callback, requests) {
    functionOutlet.updateTrno(info, callback, requests);
}

updateguestTrnos = function (info, callback, requests) {
    functionOutlet.updatePosdetailGuest(info, callback, requests);
}


updatePosdetail = function (info, callback, requests) {
    functionOutlet.updatePosdetail(info, callback, requests);
}

deactivePosdetail = function (info, callback, requests) {
    functionOutlet.deactivePosdetail(info, callback, requests);
}


deactivePosdetailTrans = function (info, callback, requests) {
    functionOutlet.deactivePosdetailTrans(info, callback, requests);
}

deactivePospaymentTrans = function (info, callback, requests) {
    functionOutlet.deactivePospaymentTrans(info, callback, requests);
}

deactivePromotrno = function (info, callback, requests) {
    functionOutlet.deactivePromoTrno(info, callback, requests);
}

deactiveCondimentByID = function (info, callback, requests) {
    functionOutlet.deactivePosCondimentByID(info, callback, requests);
}

deactiveCondimentByAll = function (info, callback, requests) {
    functionOutlet.deactiveCondimentByAll(info, callback, requests);
}


deactiveCondiment = function (info, callback, requests) {
    functionOutlet.deactiveCondiment(info, callback, requests);
}
deactiveTipeTrans = function (info, callback, requests) {
    functionOutlet.deactiveTipeTrans(info, callback, requests);
}







app.listen(3000, () => {
    console.log("Started on PORT 3000");
});