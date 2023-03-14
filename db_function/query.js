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
        progcd varchar(200) DEFAULT '',
        progname varchar(200) DEFAULT '',
        prefix varchar(200) DEFAULT '',
        profile varchar(200) DEFAULT '',
        trnonext varchar(200) DEFAULT '',
        id bigint NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (id)
      ) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
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
        date date NOT NULL,
        transno varchar(200) NOT NULL DEFAULT '',
        transno1 varchar(200) NOT NULL DEFAULT '',
        description varchar(200) DEFAULT '',
        guestname varchar(200) DEFAULT '',
        guestphone varchar(200) DEFAULT '',
        guestemail varchar(200) DEFAULT '',
        cardno varchar(200) DEFAULT '',
        companycd varchar(200) DEFAULT '',
        companydesc varchar(200) DEFAULT '',
        vchno varchar(200) DEFAULT '',
        member varchar(200) DEFAULT '',
        amount decimal(10,0) DEFAULT NULL,
        remaining decimal(10,0) DEFAULT NULL,
        active int DEFAULT '1',
        docdt date DEFAULT NULL,
        notes varchar(200) DEFAULT '',
        createdate datetime DEFAULT CURRENT_TIMESTAMP,
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
    connection.query(`insert into posdetail (trdt,outletcd,transno,transno1,itemseq,itemcode,itemdesc,description,qty,rvncoa,taxcoa,servicecoa,othercoa,rateamtitem,rateamtservice,rateamttax,revenueamt,serviceamt,taxamt,otheramt,discpct,discamt,totalaftdisc,orderno,active) VALUES ?`, [info.data], function (err, result, fields) {
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
    console.log(info);
    connection.query(`insert into item_master (outletcode,itemcode,itemdesc,slsamt,costamt,slsnett,taxpct,svchgpct,revenuecoa,taxcoa,svchgcoa,slsfl,costcoa,ctg,stock,pathimage,description,trackstock,barcode,sku) VALUES  ("${info.data.outletcode}","${info.data.itemcode}","${info.data.itemdesc}","${info.data.slsamt}","${info.data.costamt}","${info.data.slsnett}","${info.data.taxpct}","${info.data.svchgpct}","${info.data.revenuecoa}","${info.data.taxcoa}","${info.data.svchgcoa}","${info.data.slsfl}","${info.data.costcoa}","${info.data.ctg}","${info.data.stock}","${info.data.pathimage}","${info.data.description}","${info.data.trackstock}","${info.data.barcode}","${info.data.sku}")`, function (err, result, fields) {
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
    connection.query(`update item_master set itemdesc = "${info.data.itemdesc}", slsamt="${info.data.slsamt}",costamt="${info.data.costamt}",slsnett="${info.data.slsnett}",taxpct="${info.data.taxpct}",svchgpct="${info.data.svchgpct}",ctg="${info.data.ctg}",stock="${info.data.stock}",pathimage="${info.data.pathimage}",description="${info.data.description}",trackstock="${info.data.trackstock}",barcode="${info.data.barcode}",sku="${info.data.sku}"`, function (err, result, fields) {
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
    SET description='${info.data.description}',qty='${info.data.qty}',rateamtitem='${info.data.rateamtitem}',discamt='${info.data.discamt}',discpct='${info.data.discpct}',revenueamt='${info.data.revenueamt}',taxamt='${info.data.taxamt}',serviceamt='${info.data.serviceamt}',totalaftdisc='${info.data.totalaftdisc}' WHERE id = '${info.data.id}'`, function (err, result, fields) {
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


const getProduct = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`select * from item_master where outletcode='${info.data}'`, function (err, result, fields) {
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

const getTrnoData = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`select * from posdetail where transno='${info.data}' and active='1'`, function (err, result, fields) {
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
    WHERE transno = "${info.data}" and active='1'
    UNION
    SELECT
      transno,
      "0" AS revenueamt,
      IFNULL(SUM(amount), 0) AS discamt,
      "0" AS taxamt,
      "0" AS serviceamt,
      IFNULL(SUM(amount), 0) AS totalaftdisc
    FROM
      pospayment
    WHERE transno ="${info.data}" and active='1'
      AND typ = 'Discount') AS X`, function (err, result, fields) {
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



module.exports = { outletcreate, getTrnoData, getSumTrno, insertDetail, getCTG, updateItem, deactivePosdetail,deactivePosdetailTrans, updatePosdetail, delCTG, delitem, trantpInsert, insertProduct, outlet_user, getOutletUser, createDB, categoryCreate, getProduct, connection };