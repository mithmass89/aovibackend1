const mysql = require('mysql');


connection = mysql.createConnection({
    host: '147.139.163.18',
    user: 'root',
    password: '@Mitro100689',
    port: 3306,
});

connection.connect((error) => {
    if (error) throw error;
    console.log('Successfully connected to the database.');
});


const createDB = function (info, callback) {
    console.log(info);
    connection.query(`CREATE DATABASE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    connection.query(`CREATE TABLE item_master (
        outletcode varchar(100) NOT NULL,
        itemcode varchar(100) NOT NULL,
        subitemcode varchar(200) NOT NULL,
        itemdesc varchar(100) DEFAULT NULL,
        slsamt decimal(10,0) DEFAULT NULL,
        costamt decimal(10,0) DEFAULT NULL,
        slsnett decimal(10,0) DEFAULT NULL,
        taxpct decimal(10,0) DEFAULT NULL,
        svchgpct decimal(10,0) DEFAULT NULL,
        revenuecoa varchar(100) DEFAULT NULL,
        taxcoa varchar(100) DEFAULT NULL,
        svchgcoa varchar(100) DEFAULT NULL,
        slsfl int DEFAULT NULL,
        costcoa varchar(100) DEFAULT NULL,
        ctg varchar(100) DEFAULT NULL,
        stock decimal(10,0) DEFAULT NULL,
        pathimage varchar(100) DEFAULT NULL,
        description varchar(100) DEFAULT NULL,
        trackstock int DEFAULT NULL,
        barcode varchar(100) DEFAULT NULL,
        sku varchar(100) DEFAULT NULL,
        multiprice int DEFAULT '0',
        pricelist json NOT NULL,
        id bigint NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (outletcode,itemcode,id),
        KEY id (id)
      ) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }

    });

    connection.query(`CREATE TABLE transaction_typ (
        transtype varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
        transdesc varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '',
        active int DEFAULT NULL,
        id bigint NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (id)
      ) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
      `, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });

    connection.query(`CREATE TABLE category (
        ctgcd varchar(200) NOT NULL,
        ctgdesc varchar(200) DEFAULT NULL,
        id bigint NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (ctgcd,id),
        KEY id (id)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
      `, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });

    connection.query(`CREATE TABLE poscondiment (
        trdt date DEFAULT NULL,
        transno varchar(100) DEFAULT '',
        outletcode varchar(100) DEFAULT '',
        itemcode varchar(100) DEFAULT '',
        condimentcode varchar(100) DEFAULT '',
        condimentdesc varchar(100) DEFAULT '',
        condimenttype varchar(100) DEFAULT '',
        itemseq int NOT NULL,
        qty bigint DEFAULT '0',
        rateamt decimal(10,0) DEFAULT NULL,
        rateamttax decimal(10,0) DEFAULT NULL,
        rateamtservice decimal(10,0) DEFAULT NULL,
        totalamt decimal(10,0) DEFAULT NULL,
        totaltaxamt decimal(10,0) DEFAULT NULL,
        totalserviceamt decimal(10,0) DEFAULT NULL,
        createdt datetime DEFAULT NULL,
        totalnett decimal(10,0) DEFAULT NULL,
        id bigint NOT NULL AUTO_INCREMENT,
        optioncode varchar(100) DEFAULT NULL,
        optiondesc varchar(100) DEFAULT NULL,
        active int NOT NULL DEFAULT '1',
        PRIMARY KEY (id)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
      `, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });

    connection.query(`CREATE TABLE outlet_settings (
        transcode varchar(15) NOT NULL DEFAULT '',
        transnonext bigint NOT NULL DEFAULT '1'
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
      `, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });


    connection.query(`CREATE TABLE promo_master (
        promocd varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
        promodesc varchar(200) DEFAULT NULL,
        type varchar(200) DEFAULT NULL,
        pct decimal(10,0) DEFAULT NULL,
        amount decimal(10,0) DEFAULT NULL,
        mindisc decimal(10,0) DEFAULT NULL,
        maxdisc decimal(10,0) DEFAULT NULL,
        id bigint NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (id)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
      `, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });



    connection.query(`CREATE TABLE condiment_master (
        itemcode varchar(200) NOT NULL DEFAULT '',
        condimentdesc varchar(200) DEFAULT '',
        optioncode varchar(200) NOT NULL DEFAULT '',
        optiondesc varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '',
        amount decimal(10,0) NOT NULL DEFAULT '0',
        qty decimal(10,0) NOT NULL DEFAULT '0',
        condimenttype varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
        id bigint NOT NULL AUTO_INCREMENT,
        taxpct decimal(10,0) NOT NULL DEFAULT '0',
        servicepct decimal(10,0) NOT NULL DEFAULT '0',
        taxamount decimal(10,0) NOT NULL DEFAULT '0',
        serviceamount decimal(10,0) NOT NULL DEFAULT '0',
        nettamount decimal(10,0) NOT NULL DEFAULT '0',
        active int NOT NULL DEFAULT '1',
        PRIMARY KEY (itemcode,id,optioncode),
        KEY id (id)
      ) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
      
      `, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });

    connection.query(`CREATE TABLE condiment_map (
        itemcode varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
        condimentcode varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'condimentcode',
        active int NOT NULL DEFAULT '1',
        id bigint NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (itemcode,condimentcode,id),
        KEY id (id)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
      `, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });

    connection.query(`CREATE TABLE user_access (
        usercode varchar(100) DEFAULT '',
        accesscode varchar(100) DEFAULT '',
        outlet varchar(100) DEFAULT ''
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_c
      `, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });

    connection.query(`CREATE TABLE posdetail (
        trdt date NOT NULL,
        outletcd varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
        transno varchar(200) NOT NULL DEFAULT '',
        transno1 varchar(200) DEFAULT '',
        itemseq bigint DEFAULT '0',
        itemcode varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
        split varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '''A''',
        itemdesc varchar(200) DEFAULT '',
        description varchar(200) DEFAULT '',
        qty decimal(10,0) NOT NULL DEFAULT '0',
        rvncoa varchar(200) DEFAULT '',
        taxcoa varchar(200) DEFAULT '',
        servicecoa varchar(200) DEFAULT '',
        othercoa varchar(200) DEFAULT '',
        rateamtitem decimal(10,0) DEFAULT '0',
        rateamtservice decimal(10,0) DEFAULT '0',
        rateamttax decimal(10,0) DEFAULT '0',
        revenueamt decimal(10,0) DEFAULT '0',
        serviceamt decimal(10,0) DEFAULT '0',
        taxamt decimal(10,0) DEFAULT '0',
        otheramt decimal(10,0) DEFAULT '0',
        discpct decimal(10,0) DEFAULT '0',
        discamt decimal(10,0) DEFAULT '0',
        totalaftdisc decimal(10,0) DEFAULT '0',
        orderno varchar(200) DEFAULT '0',
        confirmorder int NOT NULL DEFAULT '0',
        active int DEFAULT '1',
        id bigint NOT NULL AUTO_INCREMENT,
        prnkitchen int NOT NULL DEFAULT '0',
        cono varchar(200) DEFAULT '',
        prnkitchentm datetime DEFAULT NULL,
        createdt datetime DEFAULT CURRENT_TIMESTAMP,
        usercreate varchar(200) DEFAULT '',
        notes varchar(300) DEFAULT '',
        guestname varchar(300) DEFAULT '',
        condiment json NOT NULL,
        totalcondiment decimal(10,0) DEFAULT NULL,
        salestype varchar(200) DEFAULT NULL,
        PRIMARY KEY (id)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
      `, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });

    connection.query(`CREATE TABLE pospayment (
        trdt date NOT NULL,
        pscd varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
        transno varchar(200) NOT NULL DEFAULT '',
        transno1 varchar(200) NOT NULL DEFAULT '',
        split varchar(200) DEFAULT 'A',
        docno varchar(200) DEFAULT '',
        trdesc varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '',
        guestname varchar(200) DEFAULT '',
        guestphone varchar(200) DEFAULT '',
        guestemail varchar(200) DEFAULT '',
        cardno varchar(200) DEFAULT '',
        compcd varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '',
        compdesc varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '',
        pymtmthd varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
        vchno varchar(200) DEFAULT '',
        member varchar(200) DEFAULT '',
        totalamt decimal(10,0) DEFAULT NULL,
        amtrmn decimal(10,0) DEFAULT NULL,
        active int NOT NULL DEFAULT '1',
        docdt date DEFAULT NULL,
        notes varchar(200) DEFAULT '',
        createdate datetime DEFAULT CURRENT_TIMESTAMP,
        slstp varchar(200) DEFAULT '',
        virtualaccount varchar(200) DEFAULT '',
        billerkey varchar(200) DEFAULT '',
        billercode varchar(200) DEFAULT '',
        qrcode varchar(200) DEFAULT '',
        usercreate varchar(200) DEFAULT '',
        id int NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (id)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
      
      `, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });

    connection.query(`CREATE TABLE pymaster(
        paymentcd varchar(200) NOT NULL DEFAULT '',
        paymendesc varchar(200) DEFAULT '',
        typ varchar(200) DEFAULT '',
        coacomp varchar(200) DEFAULT '',
        clactive varchar(200) DEFAULT '',
        active int DEFAULT 1,
        coapayment varchar(200),
        email varchar(200),
        limits decimal(10,0) DEFAULT NULL,
        telp varchar(200),
        npwp varchar(200),
        pic varchar(200),
        notes varchar(200),
        tbl varchar(200),
        section varchar(200),
        id bigint NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (paymentcd,id),
        KEY id (id)
      )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });

}

const outletcreate = function (info, callback) {
    console.log(info);
    connection.query(`USE profiler;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });


    connection.query(`insert into outlet (outletcd,outletdesc,telp,alamat,kodepos,slstp,dbname) VALUES  ("${info.outletcd}","${info.outletdesc}",${info.telp},"${info.alamat}",${info.kodepos},${info.slstp},"${info.dbname}");`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        callback(result);
        console.log('Database : ' + connection.state);
    });
}

const categoryCreate = function (info, callback) {
    console.log(info);
    connection.query(`USE ${info.dbname};;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    connection.query(`insert into category (ctgcd,ctgdesc) VALUES  ("${info.ctgcd}","${info.ctgdesc}");`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        callback(result);
        console.log('Database : ' + connection.state);
    });
}

const condimentMasterCreate = function (info, callback) {
    console.log(info);
    connection.query(`USE ${info.dbname};;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    var j = info.data;
    var values = j.reduce((o, a) => {
        let ini = [];
        ini.push(a.itemcode);
        ini.push(a.condimentdesc);
        ini.push(a.optioncode);
        ini.push(a.optiondesc);
        ini.push(a.amount);
        ini.push(a.qty);
        ini.push(a.condimenttype);
        ini.push(a.taxpct);
        ini.push(a.servicepct);
        ini.push(a.taxamount);
        ini.push(a.serviceamount);
        ini.push(a.nettamount);
        o.push(ini);
        return o
    }, [])
    console.log(values);
    connection.query(`insert into condiment_master (itemcode,condimentdesc,optioncode,optiondesc,amount,qty,condimenttype,taxpct,servicepct,taxamount,serviceamount ,nettamount) VALUES ?`, [values], function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        callback(result);
        console.log('Database : ' + connection.state);
    });
}

const insertPoscondiment = function (info, callback) {
    console.log(info);
    connection.query(`USE ${info.dbname};;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    var j = info.data;
    var values = j.reduce((o, a) => {
        let ini = [];
        ini.push(a.trdt);
        ini.push(a.transno);
        ini.push(a.outletcode);
        ini.push(a.itemcode);
        ini.push(a.condimentcode);
        ini.push(a.condimentdesc);
        ini.push(a.condimenttype);
        ini.push(a.itemseq);
        ini.push(a.qty);
        ini.push(a.rateamt);
        ini.push(a.rateamttax);
        ini.push(a.rateamtservice);
        ini.push(a.totalamt);
        ini.push(a.totaltaxamt);
        ini.push(a.totalserviceamt);
        ini.push(a.totalnett);
        ini.push(a.createdt);
        ini.push(a.optioncode);
        ini.push(a.optiondesc);

        o.push(ini);
        return o
    }, [])
    console.log(values);
    connection.query(`insert into poscondiment (trdt,transno,outletcode,itemcode,condimentcode,condimentdesc,condimenttype,itemseq,qty,rateamt,rateamttax,rateamtservice,totalamt,totaltaxamt,totalserviceamt,totalnett,createdt,optioncode,optiondesc) VALUES ?`, [values], function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        callback(result);
        console.log('Database : ' + connection.state);
    });
}


const mapping_Condiment = function (info, callback) {
    console.log(info);
    connection.query(`USE ${info.dbname};;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });

    var j = info.data;
    var values = j.reduce((o, a) => {
        let ini = [];
        ini.push(a.itemcode);
        ini.push(a.condimentcode);
        o.push(ini);
        return o
    }, [])
    console.log(values);
    connection.query(`insert into condiment_map (itemcode,condimentcode) VALUES ?`, [values], function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        callback(result);
        console.log('Database : ' + connection.state);
    });
}

const insert_transaksitipe = function (info, callback) {
    console.log(info);
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });

    var j = info.data;
    var values = j.reduce((o, a) => {
        let ini = [];
        ini.push(a.transtype);
        ini.push(a.transdesc);
        o.push(ini);
        return o
    }, [])
    console.log(values);
    connection.query(`insert into transaction_typ (transtype,transdesc) VALUES ?`, [values], function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        callback(result);
        console.log('Database : ' + connection.state);
    });
}

const insertPromo = function (info, callback) {
    console.log(info);
    connection.query(`USE ${info.dbname};;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    connection.query(`insert into promo_master (promocd,promodesc,type,pct,amount,mindisc,maxdisc) VALUES  ("${info.promocd}","${info.promodesc}","${info.type}","${info.pct}","${info.amount}","${info.mindisc}","${info.maxdisc}");`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        callback(result);
        console.log('Database : ' + connection.state);
    });
}



const getOutletUser = function (info, callback) {
    console.log(info);
    connection.query(`USE profiler;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    connection.query(`select * from outlet_access left join outlet on outlet.outletcd=outlet_access.outletcode where usercode='${info.usercd}'`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);
        console.log('Database : ' + connection.state);
    });
}

const getAccessUser = function (info, callback) {
    console.log(info);
    connection.query(`USE profiler;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    connection.query(`select * from access_user  where usercd='${info.usercd}'`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);
        console.log('Database : ' + connection.state);
    });
}







const outlet_user = function (info, callback) {
    console.log(info);
    connection.query(`USE profiler;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    connection.query(`insert into outlet_access (outletcode,usercode) VALUES  ("${info.outletcd}","${info.usercode}")`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);

        callback(result);
        console.log('Database : ' + connection.state);
    });
}


const trantpInsert = function (info, callback, requests) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    connection.query("insert into transaction_typ (progcd,progname,prefix,profile,trnonext) VALUES ?", [info.data], function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);
        console.log('Database : ' + connection.state);
    });
}

const insertDetail = function (info, callback, requests) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info.data);
    connection.query(`insert into posdetail (trdt,outletcd,transno,transno1,itemseq,itemcode,itemdesc,description,qty,rvncoa,taxcoa,servicecoa,othercoa,rateamtitem,rateamtservice,rateamttax,revenueamt,serviceamt,taxamt,otheramt,discpct,discamt,totalaftdisc,orderno,active,usercreate,createdt) VALUES ?`, [info.data], function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);
        console.log('Database : ' + connection.state);
    });
}


const insertPayment = function (info, callback, requests) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info.data);
    connection.query(`insert into pospayment (trdt,pscd,transno,transno1,split,docno,trdesc,guestname,guestphone,guestemail,cardno,compcd,compdesc,pymtmthd,vchno,member,totalamt,amtrmn,docdt,notes,slstp,virtualaccount,billerkey,billercode,qrcode,usercreate) VALUES ?`, [info.data], function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);
        console.log('Database : ' + connection.state);
    });
}



const insertProduct = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });

    // var x = JSON.parse(info.data.pricelist);
    var z = JSON.stringify(info.data.pricelist);
    var x = z.toString();
    console.log(x);
    connection.query(`insert into item_master (outletcode,itemcode,itemdesc,slsamt,costamt,slsnett,taxpct,svchgpct,revenuecoa,taxcoa,svchgcoa,slsfl,costcoa,ctg,stock,pathimage,description,trackstock,barcode,sku,pricelist,multiprice) VALUES  ('${info.data.outletcode}','${info.data.itemcode}','${info.data.itemdesc}','${info.data.slsamt}','${info.data.costamt}','${info.data.slsnett}','${info.data.taxpct}','${info.data.svchgpct}','${info.data.revenuecoa}','${info.data.taxcoa}','${info.data.svchgcoa}','${info.data.slsfl}','${info.data.costcoa}','${info.data.ctg}','${info.data.stock}','${info.data.pathimage}','${info.data.description}','${info.data.trackstock}','${info.data.barcode}','${info.data.sku}','${x}','${info.data.multiprice}')`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });
}


const updateItem = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    var z = JSON.stringify(info.data.pricelist);
    var x = z.toString();
    connection.query(`update item_master set itemdesc = '${info.data.itemdesc}', slsamt='${info.data.slsamt}',costamt='${info.data.costamt}',slsnett='${info.data.slsnett}',taxpct='${info.data.taxpct}',svchgpct='${info.data.svchgpct}',ctg='${info.data.ctg}',stock='${info.data.stock}',pathimage='${info.data.pathimage}',description='${info.data.description}',trackstock='${info.data.trackstock}',barcode='${info.data.barcode}',sku='${info.data.sku}',pricelist='${x}',multiprice='${info.data.multiprice}'  where itemcode='${info.data.itemcode}'`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });
}


const updatePromo = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`update promo_master set promocd = "${info.data.promocd}", promodesc="${info.data.promodesc}",amount=${info.data.amount},pct=${info.data.pct},type="${info.data.type}",maxdisc=${info.data.maxdisc},mindisc=${info.data.mindisc}`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });
}


const updateUserGmail = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`update users set uuid = "${info.data.uuid}", urlpict="${info.data.urlpic}",fullname="${info.data.fullname}",lastsignin="${info.data.lastsignin}",token="${info.data.token}"`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });
}


const updatePosdetailGuest = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`update posdetail set guestname='${info.guest}' where transno='${info.transno}'`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });
}

const updateTrno = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`UPDATE outlet_settings SET transnonext = (transnonext)+1`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });
}

const updatePosdetail = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`UPDATE posdetail 
    SET description='${info.data.description}',qty='${info.data.qty}',rateamtitem='${info.data.rateamtitem}',discamt='${info.data.discamt}',discpct='${info.data.discpct}',revenueamt='${info.data.revenueamt}',taxamt='${info.data.taxamt}',serviceamt='${info.data.serviceamt}',totalaftdisc='${info.data.totalaftdisc}',salestype='${info.data.salestype}' WHERE id = '${info.data.id}'`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });
}

const deactivePosdetail = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`UPDATE posdetail SET active='0' where id='${info.data}' `, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });
}

//deactive seluruh condiment di item terkait ///
const deactiveCondimentByAll = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`UPDATE poscondiment SET active='0' where transno='${info.transno}' and itemseq='${info.itemseq}' `, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });
}

const deactivePosCondimentByID = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`UPDATE poscondiment SET active='0' where transno='${info.transno}' and optioncode='${info.optioncode}' and itemseq='${info.itemseq}' `, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });
}


const deactiveTipeTrans = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`UPDATE transaction_typ SET active='0' where id='${info.data}' `, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });
}


const deactivePosdetailTrans = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`UPDATE posdetail SET active='0' where transno='${info.data}' `, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });
}

const deactivePospaymentTrans = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`UPDATE pospayment SET active='0' where id='${info.id}' `, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });
}

const deactivePromoTrno = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`UPDATE pospayment SET active='0' where transno='${info.transno}' `, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });
}

const deactiveCondiment = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`UPDATE condiment_master SET active='0' where itemcode='${info.itemcode}' `, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    connection.query(`UPDATE condiment_map SET active='0' where condimentcode='${info.itemcode}' `, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });
}



const updateCondimentTrno = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`UPDATE poscondiment SET active='0' where transno='${info.transno}' and itemseq='${info.itemseq}' `, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });
}




const getProduct = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`SELECT outletcode
    ,item_master.itemcode
    ,subitemcode
    ,itemdesc
    ,slsamt
    ,costamt
    ,slsnett
    ,taxpct
    ,svchgpct
    ,revenuecoa
    ,taxcoa
    ,svchgcoa
    ,slsfl
    ,costcoa
    ,ctg
    ,stock
    ,pathimage
    ,description
    ,trackstock
    ,barcode
    ,sku
    ,COUNT(condimentcode) AS modifiers
    ,item_master.id
    ,item_master.pricelist as pricelist
    ,item_master.multiprice as multiprice
     FROM item_master 
     
    LEFT JOIN condiment_map 
    ON item_master.itemcode=condiment_map.itemcode 
    and condiment_map.active='1'
    where outletcode='${info.data}'  GROUP BY itemcode`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });
}

/// query for check item has condiment ///
const getItemCondiment = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`SELECT * FROM condiment_map
    LEFT JOIN condiment_master ON condiment_map.condimentcode=condiment_master.itemcode
     WHERE condiment_map.itemcode='${info.itemcode}' and condiment_master.active='1'`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });
}


const checkTransactionNo = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`select * from outlet_settings`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });
}


const getUserinfofromManual = function (info, callback) {
    connection.query(`USE profiler;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`select * from users where email= "${info.email}" and password="${info.password}"`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });
}



const getTransaksitipe = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`select * from transaction_typ where active='1' `, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });
}

const getProductByItemcode = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`select * from item_master where outletcode='${info.outletcd}' and itemcode="${info.itemcode}"`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });
}

const getItemByBarcode = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`select * from item_master where outletcode='${info.outletcd}' and barcode="${info.barcode}"`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });
}


const getPromoList = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`select * from promo_master`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });
}

const getDetailCondimentTrno = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`select * from poscondiment where transno='${info.transno}' and itemcode='${info.itemcode}' and itemseq='${info.itemseq}' and active='1'`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });
}

const getTrnoData = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`SELECT trdt
    ,transno
    ,outletcd
    ,itemcode
    ,'' AS condimentcode
    ,'' AS condimentdesc 
    ,''AS condimenttype
    ,itemseq
    ,qty AS qty
    ,posdetail.rateamtitem AS rateamtitem
    ,posdetail.rateamttax AS rateamttax
    ,(posdetail.rateamtservice) AS rateamtservice
    ,(posdetail.revenueamt) AS revenueamt
    ,(posdetail.taxamt) AS taxamt
    ,(posdetail.serviceamt) AS serviceamt
    ,posdetail.createdt
    ,(posdetail.totalaftdisc) AS totalaftdisc
    ,posdetail.id
    ,'' AS optioncode
    ,posdetail.itemdesc AS itemdesc
    ,'main' AS typ
    ,discamt
    ,discpct
    ,(SELECT COUNT(itemcode) FROM condiment_map WHERE condiment_map.itemcode=posdetail.itemcode) AS havecond
    ,(select taxpct from item_master where posdetail.itemcode=item_master.itemcode) as taxpct
    ,(select svchgpct from item_master where posdetail.itemcode=item_master.itemcode) as svchgpct
    ,(select pricelist from item_master where posdetail.itemcode=item_master.itemcode) as pricelist
    ,(select multiprice from item_master where posdetail.itemcode=item_master.itemcode) as multiprice
    ,posdetail.salestype as salestype
    FROM 
    posdetail WHERE transno='${info.data}' AND active= '1'
    
    
    UNION 
    
    SELECT * FROM (SELECT trdt
    ,transno
    ,outletcode
    ,itemcode
    ,condimentcode
    ,condimentdesc
    ,condimenttype
    ,itemseq
    ,SUM(qty) AS qty
    ,SUM(rateamt) AS rateamt
    ,SUM(rateamttax) AS rateamttax
    ,SUM(rateamtservice) AS rateamtservice
    ,SUM(totalamt) AS totalamt
    ,SUM(totaltaxamt) AS totaltaxamt
    ,SUM(totalserviceamt) AS totalserviceamt
    ,createdt
    ,SUM(totalnett) AS totalnett
    ,id
    ,optioncode
    ,optiondesc
    ,'condiment' AS typ
    ,0 AS discamt,0 AS discpct
    ,0 
    ,0 as taxpct
    ,0 as svchgpct
    ,null as pricelist
    ,0 as multiprice
    ,'' as salestype
    FROM poscondiment WHERE transno='${info.data}' AND active= '1'
    
    
    GROUP BY itemcode,optioncode,condimentcode,itemseq )X
    
    ORDER BY itemseq
    
    `, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });
}



const getSumTrno = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`SELECT
    transno,
    SUM(X.revenueamt) AS revenueamt,
    SUM(X.discamt) AS discamt,
    SUM(X.taxamt) AS taxamt,
    SUM(X.serviceamt) AS serviceamt,
    SUM(X.totalaftdisc) AS totalaftdisc
  FROM
    (SELECT
      transno,
      SUM(revenueamt) AS revenueamt,
      "0" AS discamt,
      SUM(taxamt) AS taxamt,
      SUM(serviceamt) AS serviceamt,
      SUM(totalaftdisc) AS totalaftdisc
    FROM
      posdetail
    WHERE transno = "${info.data}"
      AND active = '1'
    UNION
    SELECT
      transno,
      SUM(totalamt) AS rvnamt,
      0 AS discamt,
      SUM(totaltaxamt) AS taxamt,
      SUM(totalserviceamt) AS serviceamt,
      SUM(totalnett) AS totalaftdisc
    FROM
      poscondiment   WHERE transno = "${info.data}"
      AND active = '1'
    UNION
    SELECT
      transno,
      "0" AS revenueamt,
      (
        CASE
          WHEN compcd = 'Discount'
          THEN SUM(- totalamt)
          ELSE SUM(totalamt)
        END
      ) AS discamt,
      "0" AS taxamt,
      "0" AS serviceamt,
      (
        CASE
          WHEN compcd = 'Discount'
          THEN SUM(- totalamt)
          ELSE SUM(totalamt)
        END
      ) AS totalaftdisc
    FROM
      pospayment
    WHERE transno = "${info.data}"
      AND active = '1'
      AND pymtmthd = 'Discount') AS X`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        // console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });
}


const getCashierSummary = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`select * from pospayment where trdt='${info.trdt}' and pscd='${info.pscd}'`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });
}

const getCTG = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`select * from category`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });
}

const getCondimentList = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`select *,count(optioncode) as totalcond from condiment_master group by itemcode`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        // console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });
}

const getSummaryPyTrno = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`select sum(totalamt) as totalamt from pospayment where transno1="${info.transno}" and pymtmthd<>"Discount" and active="1"`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });

}


const getSalesTodaySum = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`SELECT ifnull(trdt,"${info.trdt}") as trdt,ifnull(SUM(totalaftdisc),0) AS totalaftdisc FROM (SELECT  trdt,outletcd,SUM(totalaftdisc) AS totalaftdisc FROM posdetail WHERE trdt BETWEEN "${info.trdt}" AND "${info.trdt}" and active='1'
    UNION 
    SELECT  trdt,outletcode,SUM(totalnett) AS totalaftdisc FROM poscondiment WHERE trdt BETWEEN  "${info.trdt}" AND  "${info.trdt}" and active='1')X
    
    `, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });

}


const getSales7daySum = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`SELECT ifnull(trdt,"${info.trdt}") as trdt,ifnull(SUM(totalaftdisc),0) AS totalaftdisc FROM (SELECT  trdt,outletcd,SUM(totalaftdisc) AS totalaftdisc FROM posdetail WHERE trdt BETWEEN DATE_ADD("${info.trdt}", INTERVAL -7 DAY) AND "${info.trdt} and active='1'"
    UNION 
    SELECT  trdt,outletcode,SUM(totalnett) AS totalaftdisc FROM poscondiment WHERE trdt BETWEEN DATE_ADD("${info.trdt}", INTERVAL -7 DAY) AND "${info.trdt}" and active='1')X
    
    `, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });

}


const getSalesMonthly = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`SELECT ifnull(trdt,"${info.trdt}") as trdt,ifnull(SUM(totalaftdisc),0) AS totalaftdisc FROM (SELECT  trdt,outletcd,SUM(totalaftdisc) AS totalaftdisc FROM posdetail WHERE trdt BETWEEN DATE_ADD("${info.trdt}", INTERVAL -1 MONTH) AND "${info.trdt}" and active='1'
    UNION 
    SELECT  trdt,outletcode,SUM(totalnett) AS totalaftdisc FROM poscondiment WHERE trdt BETWEEN DATE_ADD("${info.trdt}", INTERVAL -1 MONTH) AND "${info.trdt}" and active='1')X
    `, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });

}


const listdataChart = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`SELECT trdt, ROUND(SUM(totalaftdisc/1000000),1)  AS totalaftdisc FROM (SELECT trdt,SUM(totalaftdisc) AS totalaftdisc FROM (SELECT  trdt,outletcd,SUM(totalaftdisc) AS totalaftdisc FROM posdetail WHERE trdt BETWEEN DATE_ADD("${info.trdt}", INTERVAL -1 MONTH) AND "${info.trdt}" and active='1' GROUP BY trdt
    UNION 
    SELECT  trdt,outletcode,SUM(totalnett) AS totalaftdisc FROM poscondiment WHERE trdt BETWEEN DATE_ADD("${info.trdt}", INTERVAL -1 MONTH) AND "${info.trdt}" and active='1'  GROUP BY trdt)X
    GROUP BY trdt 
    UNION  ALL
    SELECT DATE_ADD("${info.trdt}", INTERVAL -1 DAY) AS trdt,CAST(0 AS DECIMAL(1,1)) AS totalaftdisc
UNION 
SELECT DATE_ADD("${info.trdt}", INTERVAL -2 DAY) AS trdt,CAST(0 AS DECIMAL(1,1)) AS totalaftdisc
UNION 
SELECT DATE_ADD("${info.trdt}", INTERVAL -3 DAY) AS trdt,CAST(0 AS DECIMAL(1,1)) AS totalaftdisc
UNION 
SELECT DATE_ADD("${info.trdt}", INTERVAL -4 DAY) AS trdt,CAST(0 AS DECIMAL(1,1)) AS totalaftdisc
UNION 
SELECT DATE_ADD("${info.trdt}", INTERVAL -5 DAY) AS trdt,CAST(0 AS DECIMAL(1,1)) AS totalaftdisc
UNION 
SELECT DATE_ADD("${info.trdt}", INTERVAL -6 DAY) AS trdt,CAST(0 AS DECIMAL(1,1)) AS totalaftdisc



)X

GROUP BY trdt ORDER BY trdt
    `, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });

}

const getOutstandingBill = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`SELECT trdt,transno,SUM(totalaftdisc) AS totalaftdisc,usercreate,createdt,guestname  FROM (SELECT trdt,transno,SUM(totalaftdisc) AS totalaftdisc,usercreate,createdt,guestname FROM (
        SELECT trdt,transno,SUM(totalaftdisc) AS totalaftdisc,usercreate,createdt,guestname FROM posdetail WHERE active='1' GROUP BY transno
        UNION 
        SELECT trdt,transno,SUM(totalnett) AS totalaftdisc,'' AS usercreate,createdt,'' AS guestname FROM  poscondiment WHERE active='1' GROUP BY transno)X 
        GROUP BY transno
            UNION 
        SELECT trdt,transno,SUM(-totalamt) AS totalaftdisc,usercreate,createdate,'' as guestname FROM pospayment where active='1' GROUP BY transno )X GROUP BY transno HAVING totalaftdisc`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });

}

const getDetailPyTrno = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`select * from pospayment where transno1='${info.transno1}' and active='1' and pymtmthd<>'Discount'`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });

}

const checkUserFromOauth = function (info, callback) {
    connection.query(`USE profiler;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`SELECT * FROM users WHERE email='${info.email}'`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });

}


const checkOutletUser = function (info, callback) {
    connection.query(`USE profiler;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`SELECT * FROM outlet_access WHERE email='${info.usercd}'`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });

}

const delCTG = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`delete from category where id=${info.id}`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });
}

const delPromo = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`delete from promo_master where id=${info.id}`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });
}


const delitem = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`delete from item_master where id=${info.id}`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);

        console.log('Database : ' + connection.state);
    });
}



module.exports = { getAccessUser,checkUserFromOauth, checkOutletUser, getUserinfofromManual, updateUserGmail, listdataChart, getSalesMonthly, getSales7daySum, getSalesTodaySum, deactiveTipeTrans, getTransaksitipe, insert_transaksitipe, deactiveCondiment, updateCondimentTrno, getDetailCondimentTrno, deactiveCondimentByAll, deactivePosCondimentByID, insertPoscondiment, getItemCondiment, condimentMasterCreate, mapping_Condiment, outletcreate, updatePosdetailGuest, checkTransactionNo, getCashierSummary, getProductByItemcode, getItemByBarcode, getSummaryPyTrno, getOutstandingBill, getDetailPyTrno, getTrnoData, getPromoList, getSumTrno, insertPromo, insertDetail, insertPayment, getCTG, updateItem, deactivePospaymentTrans, deactivePosdetail, deactivePromoTrno, deactivePosdetailTrans, delPromo, updateTrno, updatePosdetail, updatePromo, delCTG, delitem, trantpInsert, insertProduct, outlet_user, getCondimentList, getOutletUser, createDB, categoryCreate, getProduct, connection };