const cors = require('cors');
const functionOutlet = require('./query');
const express = require("express");
const bodyParser = require("body-parser");
const { response } = require('express');
const app = express();
// parse requests of content-type: application/json
app.use(bodyParser.json({ limit: '50mb' }));
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const fs = require("fs");
var path = require('path');
const MySQLEvents = require('@rodrigogs/mysql-events');
var dir = path.join(__dirname, '../uploadfiles/uploads/');
var dirs = path.join(__dirname, '../uploadfiles/logo/');
app.use(express.static(dir));



app.get('/getfile/:file', async (req, res) => {
    console.log(req.params.file);
    res.sendFile(`${dir}${req.params.file}`);
});

app.get('/getlogo/:file', async (req, res) => {
    console.log(req.params.file);
    res.sendFile(`${dirs}${req.params.file}`);
});



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


app.post('/insertItemFromHO', function (req, res) {
    insertItemFromHO(req.body, function (result, req) {

    });
    insertItemFromHO(req.body, function (result, req) {
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

app.post('/getCategory', function (req, res) {
    getCategory(req.body, function (result, req) {
        res.status(200).send(result);
    });
});


app.post('/getProductByCtg', function (req, res) {
    getProductByCtg(req.body, function (result, req) {
        res.status(200).send(result);
    });
});


app.post('/additem', function (req, res) {
    insertProduct(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/createPackageMenu', function (req, res) {
    createPackageMenu(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/insertRegisterUserNew', function (req, res) {
    insertRegisterUser(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/insertRegisterUser', function (req, res) {
    insertRegisterUser(req.body, function (result, req) {
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

app.post('/updateOnlineItem', function (req, res) {
    updateOnlineItem(req.body, function (result, req) {
        res.status(200).send(result);
    });
});



app.post('/checkStock', function (req, res) {
    checkStock(req.body, function (result, req) {
        res.status(200).send(result);
    });
});


app.post('/getAccessStaffOutlet', function (req, res) {
    getAccessStaffOutlet(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/getStaff', function (req, res) {
    getStaff(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/getRefundTransaksi', function (req, res) {
    getRefundTransaksi(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/refundTrans', function (req, res) {
    refundTrans(req.body, function (result, req) {
        res.status(200).send(result);
    });
});




app.post('/getRoleStaff', function (req, res) {
    getRoleStaff(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/getRoleAccessTemplate', function (req, res) {
    getRoleAccessTemplate(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/getAccessUserOutlet', function (req, res) {
    getAccessUserOutlet(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/getCustomers', function (req, res) {
    getCustomers(req.body, function (result, req) {
        res.status(200).send(result);
    });
});
app.post('/checkPhoneNumber', function (req, res) {
    checkPhoneNumber(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/checkTypeLoyality', function (req, res) {
    checkTypeLoyality(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/getRewardData', function (req, res) {
    getRewardData(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/getLoyalityProgramActive', function (req, res) {
    getLoyalityProgramActive(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/checkProgramExist', function (req, res) {
    checkProgramExist(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/insertRegisterCustomer', function (req, res) {
    insertRegisterCustomer(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/insertLoyalityProgram', function (req, res) {
    insertLoyalityProgram(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/insertRewardSetting', function (req, res) {
    insertRewardSetting(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/getListUser', function (req, res) {
    getListUser(req.body, function (result, req) {
        res.status(200).send(result);
    });
});



app.post('/getPackageMenu', function (req, res) {
    getPackageMenu(req.body, function (result, req) {
        res.status(200).send(result);
    });
});


app.post('/getTemplatePrinter', function (req, res) {
    getTemplatePrinter(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/getitemcode', function (req, res) {
    getItemByItemCode(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/getCashierSummary', function (req, res) {
    getCashierSummary(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/getSummaryCashierDetail', function (req, res) {
    getSummaryCashierDetail(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/insertGuestPosdetail', function (req, res) {
    insertGuestPosdetail(req.body, function (result, req) {
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

app.post('/deleteAksesStaff', function (req, res) {
    deleteAksesStaff(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/getMainAccess', function (req, res) {
    getMainAccess(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/insertAccessToUser', function (req, res) {
    insertAccessToUser(req.body, function (result, req) {
        res.status(200).send(result);
    });
});


app.post('/grossMargin', function (req, res) {
    grossMargin(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/detailpayment', function (req, res) {
    getDetailPyTrno(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/checkLastSplit', function (req, res) {
    checkLastSplit(req.body, function (result, req) {
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

app.post('/insertAdujsmentStock', function (req, res) {
    insertAdujsmentStock(req.body, function (result, req) {
        res.status(200).send(result);
    });
});


app.post('/insertAccessOutletUser', function (req, res) {
    insertAccessOutletUser(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/insertAccessUser', function (req, res) {
    insertAccessUser(req.body, function (result, req) {
        res.status(200).send(result);
    });
});


app.post('/insertAccessOutlet', function (req, res) {
    insertAccessOutlet(req.body, function (result, req) {
        res.status(200).send(result);
    });
});




app.post('/insertMapping', function (req, res) {
    insertMapping_condiment(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/createCompany', function (req, res) {
    createCompany(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/insert_transactiontype', function (req, res) {
    insert_transaksitipe(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/insertTableMaster', function (req, res) {
    insertTableMaster(req.body, function (result, req) {
        res.status(200).send(result);
    });
});





app.post('/checkVerifiedPayment', function (req, res) {
    checkVerifiedPayment(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/checkExpiredDate', function (req, res) {
    checkExpiredDate(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/checkEmailExist', function (req, res) {
    checkEmailExist(req.body, function (result, req) {
        res.status(200).send(result);
    });
});


app.post('/updatePaymentVerification', function (req, res) {
    updatePaymentVerification(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/updateCustomers', function (req, res) {
    updateCustomers(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/updatePointCustomers', function (req, res) {
    updatePointCustomers(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/updateTemplatePrinter', function (req, res) {
    updateTemplatePrinter(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/outlet_user', function (req, res) {
    getOutletUser(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/getOutletUserSelected', function (req, res) {
    getOutletUserSelected(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/getListStaffOutlet', function (req, res) {
    getListStaffOutlet(req.body, function (result, req) {
        res.status(200).send(result);
    });
});


app.post('/insertAbsensi', function (req, res) {
    insertAbsensi(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/insertAccessCodeStrict', function (req, res) {
    insertAccessCodeStrict(req.body, function (result, req) {
        res.status(200).send(result);
    });
});



app.post('/getReportDetailMenuSold', function (req, res) {
    getReportDetailMenuSold(req.body, function (result, req) {
        res.status(200).send(result);
    });
});


app.post('/retriveListDetailPayment', function (req, res) {
    retriveListDetailPayment(req.body, function (result, req) {
        res.status(200).send(result);
    });
});


app.post('/getReportDetailMenuSoldDetail', function (req, res) {
    getReportDetailMenuSoldDetail(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/getAccessSettingsUser', function (req, res) {
    getAccessSettingsUser(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/getAccessCodevoid', function (req, res) {
    getAccessCodevoid(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/getAnalisaRingkasan', function (req, res) {
    getAnalisaRingkasan(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/getAnalisaRingkasanTopitem', function (req, res) {
    getAnalisaRingkasanTopitem(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/getAnalisaRingkasanItemKuranglaku', function (req, res) {
    getAnalisaRingkasanItemKuranglaku(req.body, function (result, req) {
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

app.post('/getOutstandingBillTransno', function (req, res) {
    getOutstandingBillTransno(req.body, function (result, req) {
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

app.post('/getPenjualanRataRata', function (req, res) {
    getPenjualanRataRata(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/getReportRingkasan', function (req, res) {
    getReportRingkasan(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/DetailMenuItemTerjual', function (req, res) {
    DetailMenuItemTerjual(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/getTrnoBO', function (req, res) {
    getTrnoBO(req.body, function (result, req) {
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

app.post('/checkPointCustomer', function (req, res) {
    checkPointCustomer(req.body, function (result, req) {
        res.status(200).send(result);
    });
});



app.post('/promolist', function (req, res) {
    getPromoList(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/getPaymentMaster', function (req, res) {
    getPaymentMaster(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/getTableList', function (req, res) {
    getTableList(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/delctg', function (req, res) {
    delctg(req.body, function (result, req) {
        res.status(200).send(result);
    });
});


app.post('/deactiveTable', function (req, res) {
    deactiveTable(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/deActivePackageMenu', function (req, res) {
    deActivePackageMenu(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/deactiveTableAll', function (req, res) {
    deactiveTableAll(req.body, function (result, req) {
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

app.post('/updateStrictUser', function (req, res) {
    updateStrictUser(req.body, function (result, req) {
        res.status(200).send(result);
    });
});
app.post('/updateSplit', function (req, res) {
    updateSplit(req.body, function (result, req) {
        res.status(200).send(result);
    });
});
app.post('/updateSplitCondiment', function (req, res) {
    updateSplitCondiment(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/updateTrnoGuest', function (req, res) {
    updateguestTrnos(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/updatePosdetailSeflorder', function (req, res) {
    updatePosdetailSeflorder(req.body, function (result, req) {
        res.status(200).send(result);
    });
});


app.post('/updateTablestrno', function (req, res) {
    updateTablestrno(req.body, function (result, req) {
        res.status(200).send(result);
    });
});


app.post('/updateTables_use', function (req, res) {
    updateTables_use(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/cleartable', function (req, res) {
    cleartable(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/getTablesNotUse', function (req, res) {
    getTablesNotUse(req.body, function (result, req) {
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

app.post('/passwordreset', function (req, res) {
    passwordreset(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/updatePaymentFirst', function (req, res) {
    updatePaymentFirst(req.body, function (result, req) {
        res.status(200).send(result);
    });
});

app.post('/Update7DayActive', function (req, res) {
    Update7DayActive(req.body, function (result, req) {
        res.status(200).send(result);
    });
});







getAccessCodevoid = function (info, callback, requests) {
    functionOutlet.getAccessCodevoid(info, callback);
}

updatePaymentFirst = function (info, callback, requests) {
    functionOutlet.updatePaymentFirst(info, callback);
}

Update7DayActive = function (info, callback, requests) {
    functionOutlet.Update7DayActive(info, callback);
}

updatePaymentVerification = function (info, callback, requests) {
    functionOutlet.updatePaymentVerification(info, callback);
}

updateCustomers = function (info, callback, requests) {
    functionOutlet.updateCustomers(info, callback);
}


updatePointCustomers = function (info, callback, requests) {
    functionOutlet.updatePointCustomers(info, callback);
}

insertOutlet = function (info, callback, requests) {
    functionOutlet.outletcreate(info, callback);
}

insertItemFromHO = function (info, callback, requests) {
    functionOutlet.insertItemFromHO(info, callback);
}

insertRegisterUser = function (info, callback, requests) {
    functionOutlet.insertRegisterUser(info, callback);
}

insertRegisterUserNew = function (info, callback, requests) {
    functionOutlet.insertRegisterUserNew(info, callback);
}


insertOutlet_User = function (info, callback, requests) {
    functionOutlet.outlet_user(info, callback);

}
getCategory = function (info, callback, requests) {
    functionOutlet.getCategory(info, callback);
}

getProductByCtg = function (info, callback, requests) {
    functionOutlet.getProductByCtg(info, callback);
}


insertTrtp = function (info, callback, requests,) {
    functionOutlet.trantpInsert(info, callback, requests);
}

insertProduct = function (info, callback, requests) {
    functionOutlet.insertProduct(info, callback, requests);
}


createPackageMenu = function (info, callback, requests) {
    functionOutlet.createPackageMenu(info, callback, requests);
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

createCompany = function (info, callback, requests) {
    functionOutlet.createCompany(info, callback, requests);
}

insertPosCondiment = function (info, callback, requests) {
    functionOutlet.insertPoscondiment(info, callback, requests);
}

insertAdujsmentStock = function (info, callback, requests) {
    functionOutlet.insertAdujsmentStock(info, callback, requests);
}

insertAccessUser = function (info, callback, requests) {
    functionOutlet.insertAccessUser(info, callback, requests);
}
insertAccessOutletUser = function (info, callback, requests) {
    functionOutlet.insertAccessOutletUser(info, callback, requests);
}

insertRegisterCustomer = function (info, callback, requests) {
    functionOutlet.insertRegisterCustomer(info, callback, requests);
}

insertLoyalityProgram = function (info, callback, requests) {
    functionOutlet.insertLoyalityProgram(info, callback, requests);
}

insertRewardSetting = function (info, callback, requests) {
    functionOutlet.insertRewardSetting(info, callback, requests);
}


insertAccessOutlet = function (info, callback, requests) {
    functionOutlet.insertAccessOutlet(info, callback, requests);
}

insertMapping_condiment = function (info, callback, requests) {
    functionOutlet.mapping_Condiment(info, callback, requests);
}

insert_transaksitipe = function (info, callback, requests) {
    functionOutlet.insert_transaksitipe(info, callback, requests);
}


insertTableMaster = function (info, callback, requests) {
    functionOutlet.insertTableMaster(info, callback, requests);
}




checkVerifiedPayment = function (info, callback, requests) {
    functionOutlet.checkVerifiedPayment(info, callback, requests);
}

checkExpiredDate = function (info, callback, requests) {
    functionOutlet.checkExpiredDate(info, callback, requests);
}


checkEmailExist = function (info, callback, requests) {
    functionOutlet.checkEmailExist(info, callback, requests);
}

checkLastSplit = function (info, callback, requests) {
    functionOutlet.checkLastSplit(info, callback, requests);
}



getOutletUser = function (info, callback, requests) {
    functionOutlet.getOutletUser(info, callback, requests);
}

getOutletUserSelected = function (info, callback, requests) {
    functionOutlet.getOutletUserSelected(info, callback, requests);
}

getListStaffOutlet = function (info, callback, requests) {
    functionOutlet.getListStaffOutlet(info, callback, requests);
}

insertAbsensi = function (info, callback, requests) {
    functionOutlet.insertAbsensi(info, callback, requests);
}


insertAccessCodeStrict = function (info, callback, requests) {
    functionOutlet.insertAccessCodeStrict(info, callback, requests);
}


getTablesNotUse = function (info, callback, requests) {
    functionOutlet.getTablesNotUse(info, callback, requests);
}

getTableList = function (info, callback, requests) {
    functionOutlet.getTableList(info, callback, requests);
}

cleartable = function (info, callback, requests) {
    functionOutlet.cleartable(info, callback, requests);
}

checkUserFromOauth = function (info, callback, requests) {
    functionOutlet.checkUserFromOauth(info, callback, requests);
}

checkPointCustomer = function (info, callback, requests) {
    functionOutlet.checkPointCustomer(info, callback, requests);
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



getTemplatePrinter = function (info, callback, requests) {
    functionOutlet.getTemplatePrinter(info, callback, requests);
}
getPromoList = function (info, callback, requests) {
    functionOutlet.getPromoList(info, callback, requests);
}

getItem = function (info, callback, requests) {
    functionOutlet.getProduct(info, callback, requests);
}

updateOnlineItem = function (info, callback, requests) {
    functionOutlet.updateOnlineItem(info, callback, requests);
}



checkStock = function (info, callback, requests) {
    functionOutlet.checkStock(info, callback, requests);
}

getAccessStaffOutlet = function (info, callback, requests) {
    functionOutlet.getAccessStaffOutlet(info, callback, requests);
}

getStaff = function (info, callback, requests) {
    functionOutlet.getStaff(info, callback, requests);
}

getRefundTransaksi = function (info, callback, requests) {
    functionOutlet.getRefundTransaksi(info, callback, requests);
}

refundTrans = function (info, callback, requests) {
    functionOutlet.refundTrans(info, callback, requests);
}

getRoleStaff = function (info, callback, requests) {
    functionOutlet.getRoleStaff(info, callback, requests);
}

getRoleAccessTemplate = function (info, callback, requests) {
    functionOutlet.getRoleAccessTemplate(info, callback, requests);
}

getAccessUserOutlet = function (info, callback, requests) {
    functionOutlet.getAccessUserOutlet(info, callback, requests);
}

getCustomers = function (info, callback, requests) {
    functionOutlet.getCustomers(info, callback, requests);
}

checkPhoneNumber = function (info, callback, requests) {
    functionOutlet.checkPhoneNumber(info, callback, requests);
}

checkTypeLoyality = function (info, callback, requests) {
    functionOutlet.checkTypeLoyality(info, callback, requests);
}


getRewardData = function (info, callback, requests) {
    functionOutlet.getRewardData(info, callback, requests);
}

getLoyalityProgramActive = function (info, callback, requests) {
    functionOutlet.getLoyalityProgramActive(info, callback, requests);
}

checkProgramExist = function (info, callback, requests) {
    functionOutlet.checkProgramExist(info, callback, requests);
}

getListUser = function (info, callback, requests) {
    functionOutlet.getListUser(info, callback, requests);
}

getPackageMenu = function (info, callback, requests) {
    functionOutlet.getPackageMenu(info, callback, requests);
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


deleteAksesStaff = function (info, callback, requests) {
    functionOutlet.deleteAksesStaff(info, callback, requests);
}

getMainAccess = function (info, callback, requests) {
    functionOutlet.getMainAccess(info, callback, requests);
}


insertAccessToUser = function (info, callback, requests) {
    functionOutlet.insertAccessToUser(info, callback, requests);
}


grossMargin = function (info, callback, requests) {
    functionOutlet.grossMargin(info, callback, requests);
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
getOutstandingBillTransno = function (info, callback, requests) {
    functionOutlet.getOutstandingBillTransno(info, callback, requests);
}

getSalesTodaySum = function (info, callback, requests) {
    functionOutlet.getSalesTodaySum(info, callback, requests);
}

getPenjualanRataRata = function (info, callback, requests) {
    functionOutlet.getPenjualanRataRata(info, callback, requests);
}

getReportRingkasan = function (info, callback, requests) {
    functionOutlet.getReportRingkasan(info, callback, requests);
}

DetailMenuItemTerjual = function (info, callback, requests) {
    functionOutlet.DetailMenuItemTerjual(info, callback, requests);
}

getTrnoBO = function (info, callback, requests) {
    functionOutlet.getTrnoBO(info, callback, requests);
}


getSales7daySum = function (info, callback, requests) {
    functionOutlet.getSales7daySum(info, callback, requests);
}

getSalesMonthly = function (info, callback, requests) {
    functionOutlet.getSalesMonthly(info, callback, requests);
}

getPaymentMaster = function (info, callback, requests) {
    functionOutlet.getPaymentMaster(info, callback, requests);
}

listdataChart = function (info, callback, requests) {
    functionOutlet.listdataChart(info, callback, requests);
}

getCashierSummary = function (info, callback, requests) {
    functionOutlet.getCashierSummary(info, callback, requests);
}

getAnalisaRingkasan = function (info, callback, requests) {
    functionOutlet.getAnalisaRingkasan(info, callback, requests);
}

getAnalisaRingkasanTopitem = function (info, callback, requests) {
    functionOutlet.getAnalisaRingkasanTopitem(info, callback, requests);
}

getAnalisaRingkasanItemKuranglaku = function (info, callback, requests) {
    functionOutlet.getAnalisaRingkasanItemKuranglaku(info, callback, requests);
}

getReportDetailMenuSold = function (info, callback, requests) {
    functionOutlet.getReportDetailMenuSold(info, callback, requests);
}

retriveListDetailPayment = function (info, callback, requests) {
    functionOutlet.retriveListDetailPayment(info, callback, requests);
}

getAccessSettingsUser = function (info, callback, requests) {
    functionOutlet.getAccessSettingsUser(info, callback, requests);
}

getReportDetailMenuSoldDetail = function (info, callback, requests) {
    functionOutlet.getReportDetailMenuSoldDetail(info, callback, requests);
}

getSummaryCashierDetail = function (info, callback, requests) {
    functionOutlet.getSummaryCashierDetail(info, callback, requests);
}

insertGuestPosdetail = function (info, callback, requests) {
    functionOutlet.insertGuestPosdetail(info, callback, requests);
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

passwordreset = function (info, callback, requests) {
    functionOutlet.passwordreset(info, callback, requests);
}

updateUserGmail = function (info, callback, requests) {
    functionOutlet.updateUserGmail(info, callback, requests);
}

updateSplit = function (info, callback, requests) {
    functionOutlet.updateSplit(info, callback, requests);
}

updateSplitCondiment = function (info, callback, requests) {
    functionOutlet.updateSplitCondiment(info, callback, requests);
}

updateStrictUser = function (info, callback, requests) {
    functionOutlet.updateStrictUser(info, callback, requests);
}



delPromo = function (info, callback, requests) {
    functionOutlet.delPromo(info, callback, requests);
}


updateItem = function (info, callback, requests) {
    functionOutlet.updateItem(info, callback, requests);
}

updateTemplatePrinter = function (info, callback, requests) {
    functionOutlet.updateTemplatePrinter(info, callback, requests);
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

updatePosdetailSeflorder = function (info, callback, requests) {
    functionOutlet.updatePosdetailSeflorder(info, callback, requests);
}

updateTablestrno = function (info, callback, requests) {
    functionOutlet.updateTablestrno(info, callback, requests);
}

updateTables_use = function (info, callback, requests) {
    functionOutlet.updateTables_use(info, callback, requests);
}


updatePosdetail = function (info, callback, requests) {
    functionOutlet.updatePosdetail(info, callback, requests);
}

deactivePosdetail = function (info, callback, requests) {
    functionOutlet.deactivePosdetail(info, callback, requests);
}

deactiveTable = function (info, callback, requests) {
    functionOutlet.deactiveTable(info, callback, requests);
}

deActivePackageMenu = function (info, callback, requests) {
    functionOutlet.deActivePackageMenu(info, callback, requests);
}

deactiveTableAll = function (info, callback, requests) {
    functionOutlet.deactiveTableAll(info, callback, requests);
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