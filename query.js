const mysql = require('mysql');


connection = mysql.createConnection({
    host: '153.92.5.25',
    user: 'root',
    password: '@Mitro100689',
    port: 3306,
    dateStrings: ['DATE', 'DATETIME'],
    multipleStatements: true,
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
        pathimage varchar(400) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
        description varchar(100) DEFAULT NULL,
        trackstock int DEFAULT NULL,
        barcode varchar(100) DEFAULT NULL,
        sku varchar(100) DEFAULT NULL,
        multiprice int DEFAULT '0',
        pricelist json NOT NULL,
        packageflag int DEFAULT '0',
        onlineflag int DEFAULT '0',
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
        active int DEFAULT '1',
        id bigint NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (id)
      ) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
      `, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });


    connection.query(`
    CREATE TABLE reward_point (
        loyalitycd varchar(200) DEFAULT NULL,
        rewaradtype varchar(200) DEFAULT NULL,
        redempoint decimal(10,0) DEFAULT NULL,
        reward decimal(10,0) DEFAULT NULL,
        note varchar(200) DEFAULT NULL,
        useminimum int DEFAULT NULL,
        minimumamount decimal(10,0) DEFAULT NULL,
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

    connection.query(`CREATE TABLE transaction_typ_bo (
        transtype varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
        transdesc varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '',
        trnonext int NOT NULL DEFAULT '1',
        active int DEFAULT '1',
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

    connection.query(`insert into transaction_typ_bo (transtype,transdesc,trnonext,active) VALUES  ("1010","adjusment stock",1,1)`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);
        console.log('Database : ' + connection.state);
    });

    connection.query(`insert into transaction_typ_bo (transtype,transdesc,trnonext,active) VALUES  ("1020","Retur Transaksi",1,1)`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        callback(result);
        console.log('Database : ' + connection.state);
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
        split int DEFAULT '1',
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


    connection.query(`
    CREATE TABLE transaction_bo (
        trdt varchar(200) NOT NULL DEFAULT '',
        transno varchar(200) NOT NULL DEFAULT '',
        documentno varchar(200) DEFAULT '',
        description varchar(200) DEFAULT '',
        type_tr varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
        product varchar(200) NOT NULL DEFAULT '',
        proddesc varchar(200) DEFAULT '',
        qty int DEFAULT NULL,
        unit varchar(200) DEFAULT '',
        ctr varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
        subctr varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
        famount double DEFAULT NULL,
        lamount double DEFAULT NULL,
        note varchar(200) DEFAULT '',
        active int NOT NULL DEFAULT '1',
        docdt varchar(200) DEFAULT '',
        id int NOT NULL AUTO_INCREMENT,
        usercreate varchar(200) DEFAULT '',
        tstamp datetime DEFAULT CURRENT_TIMESTAMP,
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
        transnonext bigint NOT NULL DEFAULT '1',
        usetaxservice tinyint(1) NOT NULL DEFAULT '0',
        strictuser tinyint(1) DEFAULT 0,
        midtranskey varchar(300) DEFAULT '',
        useonlinepayment tinyint(1) NOT NULL DEFAULT '0' COMMENT 'tokoonline menggunakan pembayaran online'
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

    connection.query(`
    CREATE TABLE tables (
        tablecd varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '',
        sectioncd varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '',
        posx int DEFAULT '0',
        posy int DEFAULT '0',
        id int NOT NULL AUTO_INCREMENT,
        active int DEFAULT '1',
        transno varchar(100) DEFAULT '',
        PRIMARY KEY (id)
      ) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
    
      `, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });

    connection.query(`
    CREATE TABLE printer_settings (
        printerid varchar(200) DEFAULT '',
        logourl varchar(500) DEFAULT '',
        header varchar(500) DEFAULT '',
        footer varchar(500) DEFAULT '',
        headerbold tinyint(1) DEFAULT '0',
        footerbold tinyint(1) DEFAULT '0',
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
        split int NOT NULL DEFAULT '1',
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
        tables_id varchar(100) DEFAULT '',
        reason text,
        totalcost decimal(10,0) NOT NULL DEFAULT '0',
        ratecostamt decimal(10,0) DEFAULT '0',
        
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
        split int DEFAULT '1',
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
        reason text,
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
        paymentdesc varchar(200) DEFAULT '',
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
        term int NOT NULL DEFAULT '0',
        PRIMARY KEY (paymentcd,id),
        KEY id (id)
      )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });


    connection.query(`CREATE TABLE item_package (
        packagecd varchar(100) DEFAULT NULL,
        packagedesc varchar(100) DEFAULT NULL,
        packagenote text,
        itemcode varchar(100) DEFAULT NULL,
        itemdesc varchar(100) DEFAULT NULL,
        qty bigint DEFAULT NULL,
        id int NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (id)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });


    connection.query(`CREATE TABLE customers (
        customercd varchar(200) DEFAULT '',
        fullname varchar(200) DEFAULT '',
        title varchar(200) DEFAULT '',
        phone varchar(200) DEFAULT '',
        email varchar(200) DEFAULT '',
        workkom varchar(200) DEFAULT '',
        address varchar(200) DEFAULT '',
        points decimal(10,0) DEFAULT '0',
        memberfrom date DEFAULT NULL,
        id int NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (id)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });


    connection.query(`CREATE TABLE loyality_dt (
        loyalitycd varchar(200) DEFAULT NULL,
        loyaltiydesc varchar(200) DEFAULT NULL,
        fromdate varchar(200) DEFAULT NULL,
        todate varchar(200) DEFAULT NULL,
        type varchar(200) DEFAULT NULL,
        convamount decimal(10,0) DEFAULT NULL,
        point decimal(10,0) DEFAULT NULL,
        minimumamount decimal(10,0) DEFAULT NULL,
        useminimum int DEFAULT NULL,
        joinreward decimal(10,0) DEFAULT NULL,
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

    connection.query(`CREATE TABLE loyality_type (
        typecd varchar(200) DEFAULT NULL,
        typedesc varchar(200) DEFAULT NULL,
        note varchar(200) DEFAULT NULL,
        id int NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (id)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });


    connection.query(`CREATE TABLE absent (
        date date NOT NULL,
        email varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
        type varchar(100) NOT NULL,
        actiontime datetime NOT NULL,
        hasbeencheck tinyint(1) DEFAULT NULL,
        id int NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (id)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });


    connection.query(`insert into loyality_type (typecd,typedesc,note) VALUES  ('type-01','Rp X = Y Point','Pelanggan dapat akan mendapat point untuk setiap pembelian dengan amount tertentu ')`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        console.log('Database : ' + connection.state);
    });
    connection.query(`insert into loyality_type (typecd,typedesc,note) VALUES  ('type-02','Item / Category X = Y Point','Pelanggan dapat akan mendapat point untuk setiap pembelian berdasarkan item atau kategory')`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        console.log('Database : ' + connection.state);
    });


    connection.query(`insert into outlet_settings (transnonext,usetaxservice,strictuser) VALUES  (1,0,0)`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        console.log('Database : ' + connection.state);
    });
    connection.query(`insert into printer_settings (printerid,logourl,header,footer,headerbold,footerbold) VALUES  ('','','','',0,0)`, function (err, result, fields) {
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

const createCompany = function (info, callback) {
    console.log(info);
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    connection.query(`insert into pymaster (paymentcd,paymentdesc,typ,coacomp,clactive,coapayment,email,telp,npwp,pic,term,limits) VALUES  ("${info.data.paymentcd}","${info.data.paymentdesc}","${info.data.typ}","${info.data.coacomp}","${info.data.clactive}","${info.data.coapayment}","${info.data.email}","${info.data.telp}","${info.data.npwp}","${info.data.pic}","${info.data.term}","${info.data.limits}");`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        callback(result);
        console.log('Database : ' + connection.state);
    });
}

const insertAccessOutlet = function (info, callback) {
    console.log(info);
    connection.query(`USE profiler;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    connection.query(`insert into outlet_access (outletcode,usercode) VALUES  ("${info.outletcode}","${info.usercode}");`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        callback(result);
        console.log('Database : ' + connection.state);
    });
}


const insertAccessToUser = function (info, callback) {
    console.log(info);
    connection.query(`USE profiler;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    connection.query(`insert into access_user (usercode,rolecode,roledesc,accesscode,accessdesc,outletcd,subscription) VALUES  ("${info.usercode}","${info.rolecode}","${info.roledesc}","${info.accesscode}","${info.accessdesc}","${info.outletcd}","${info.subscription}");`, function (err, result, fields) {
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


const insertGuestPosdetail = function (info, callback) {
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
        ini.push(a.trdt);
        ini.push(a.outletcd);
        ini.push(a.transno);
        ini.push(a.transno1);
        ini.push(a.itemseq);
        ini.push(a.itemcode);
        ini.push(a.split);
        ini.push(a.itemdesc);
        ini.push(a.description);
        ini.push(a.qty);
        ini.push(a.rvncoa);
        ini.push(a.taxcoa);
        ini.push(a.servicecoa);
        ini.push(a.othercoa);
        ini.push(a.rateamtitem);
        ini.push(a.rateamtservice);
        ini.push(a.rateamttax);
        ini.push(a.revenueamt);
        ini.push(a.serviceamt);
        ini.push(a.taxamt);
        ini.push(a.otheramt);
        ini.push(a.discpct);
        ini.push(a.discamt);
        ini.push(a.confirmorder);
        ini.push(a.active);
        ini.push(a.createdt);
        ini.push(a.usercreate);
        ini.push(a.notes);
        ini.push(a.guestname);
        ini.push(a.totalcost);
        ini.push(a.ratecostamt);
        o.push(ini);
        return o
    }, [])
    console.log(values);
    connection.query(`insert into posdetail (trdt,outletcd,transno,transno1,itemseq,itemcode,split,itemdesc,description,qty,rvncoa ,taxcoa,servicecoa,othercoa,rateamtitem,rateamtservice,rateamttax,revenueamt,serviceamt,taxamt,otheramt,discpct,discamt,confirmorder,active,createdt,usercreate,notes,guestname,totalcost,ratecostamt) VALUES ?`, [values], function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        callback(result);
        console.log('Database : ' + connection.state);
    });
}



const insertAdujsmentStock = function (info, callback) {
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
        ini.push(a.trdt);
        ini.push(a.transno);
        ini.push(a.documentno);
        ini.push(a.description);
        ini.push(a.type_tr);
        ini.push(a.product);
        ini.push(a.proddesc);
        ini.push(a.qty);
        ini.push(a.unit);
        ini.push(a.ctr);
        ini.push(a.subctr);
        ini.push(a.famount);
        ini.push(a.lamount);
        ini.push(a.note);
        ini.push(a.active);
        ini.push(a.usercreate);
        o.push(ini);
        return o
    }, [])
    console.log(values);
    connection.query(`insert into transaction_bo (trdt,transno,documentno,description,type_tr,product,proddesc,qty,unit,ctr,subctr,famount,lamount ,note,active,usercreate) VALUES ?`, [values], function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        callback(result);
        console.log('Database : ' + connection.state);
    });
}


const insertAccessUser = function (info, callback) {
    console.log(info);
    connection.query(`USE profiler;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    var j = info.data;
    var values = j.reduce((o, a) => {
        let ini = [];
        ini.push(a.usercode);
        ini.push(a.rolecode);
        ini.push(a.roledesc);
        ini.push(a.accesscode);
        ini.push(a.accessdesc);
        ini.push(a.outletcd);
        ini.push(a.subscription);
        o.push(ini);
        return o
    }, [])
    console.log(values);
    connection.query(`insert into access_user (usercode,rolecode,roledesc,accesscode,accessdesc,outletcd,subscription) VALUES ?`, [values], function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        callback(result);
        console.log('Database : ' + connection.state);
    });
}

const insertTableMaster = function (info, callback) {
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
        ini.push(a.tablecd);
        ini.push(a.sectioncd);
        ini.push(a.posx);
        ini.push(a.posy);
        o.push(ini);
        return o
    }, [])
    console.log(values);
    connection.query(`insert into tables (tablecd,sectioncd,posx,posy) VALUES ?`, [values], function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        callback(result);
        console.log('Database : ' + connection.state);
    });
}


const createPackageMenu = function (info, callback) {
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
        ini.push(a.packagecd);
        ini.push(a.packagedesc);
        ini.push(a.itemcode);
        ini.push(a.itemdesc);
        ini.push(a.qty);
        o.push(ini);
        return o
    }, [])
    console.log(values);
    connection.query(`insert into item_package (packagecd,packagedesc,itemcode,itemdesc,qty) VALUES ?`, [values], function (err, result, fields) {
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


const insertRegisterUser = function (info, callback) {
    console.log(info);
    connection.query(`USE profiler;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    connection.query(`insert into users (usercd,password,email,level,subscription,paymentcheck,frenchisecode) VALUES  ("${info.usercd}","${info.password}","${info.email}","${info.level}","${info.subscription}","${info.paymentcheck}","${info.frenchisecode}");`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        callback(result);
        console.log('Database : ' + connection.state);
    });
}


const insertRegisterUserNew = function (info, callback) {
    console.log(`ini referral : ${info.referral}`);
    connection.query(`USE profiler;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });

    connection.query(`insert into users (usercd,password,email,level,frenchisecode,referral,telp) VALUES  ("${info.usercd}","${info.password}","${info.email}","${info.level}","${info.frenchisecode}","${info.referral}","${info.telp}");`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        callback(result);
        console.log(result);
        console.log('Database : ' + connection.state);
    });
}


const insertRegisterCustomer = function (info, callback) {
    console.log(info);
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    connection.query(`insert into customers (customercd,fullname,title,phone,email,workkom,address,points,memberfrom) VALUES  ("${info.customercd}","${info.fullname}","${info.title}","${info.phone}","${info.email}","${info.workkom}","${info.address}","${info.points}","${info.memberfrom}");`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        callback(result);
        console.log('Database : ' + connection.state);
    });
}

const insertLoyalityProgram = function (info, callback) {
    console.log(info);
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    connection.query(`insert into loyality_dt (loyalitycd,loyaltiydesc,fromdate,todate,type,convamount,point,minimumamount,useminimum,joinreward) VALUES  ("${info.loyalitycd}","${info.loyaltiydesc}","${info.fromdate}","${info.todate}","${info.type}","${info.convamount}","${info.point}","${info.minimumamount}","${info.useminimum}","${info.joinreward}");`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        callback(result);
        console.log('Database : ' + connection.state);
    });
}

const insertAbsensi = function (info, callback) {
    console.log(info);
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    connection.query(`insert into absent (date,email,type,actiontime,hasbeencheck) VALUES  ("${info.date}","${info.email}","${info.type}","${info.actiontime}","${info.hasbeencheck}");`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        callback(result);
        console.log('Database : ' + connection.state);
    });
}

const insertAccessCodeStrict = function (info, callback) {
    console.log(info);
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    connection.query(`insert into user_access (usercode,accesscode) VALUES  ("${info.usercode}","${info.accesscode}");`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        callback(result);
        console.log('Database : ' + connection.state);
    });
}


const insertRewardSetting = function (info, callback) {
    console.log(info);
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    connection.query(`insert into reward_point (loyalitycd,rewaradtype,redempoint,reward,note,useminimum,minimumamount) VALUES  ("${info.loyalitycd}","${info.rewaradtype}","${info.redempoint}","${info.reward}","${info.note}","${info.useminimum}","${info.minimumamount}");`, function (err, result, fields) {
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
    connection.query(`select * from outlet_access left join outlet on outlet.outletcd=outlet_access.outletcode where usercode='${info.email}'`, function (err, result, fields) {
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


const checkPhoneNumber = function (info, callback) {
    console.log(info);
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    connection.query(`select phone from customers where phone='${info.phone}'`, function (err, result, fields) {
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

const checkTypeLoyality = function (info, callback) {
    console.log(info);
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    connection.query(`select * from loyality_type`, function (err, result, fields) {
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


const checkProgramExist = function (info, callback) {
    console.log(info);
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    connection.query(`select * from loyality_dt`, function (err, result, fields) {
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

const checkPointCustomer = function (info, callback) {
    console.log(info);
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    connection.query(`SELECT points FROM customers WHERE fullname='${info.fullname}'`, function (err, result, fields) {
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

const checkExpiredDate = function (info, callback) {
    console.log(info);
    connection.query(`USE profiler;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    connection.query(`SELECT expireddate FROM users WHERE email='${info.email}'`, function (err, result, fields) {
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





const getRewardData = function (info, callback) {
    console.log(info);
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    connection.query(`select * from reward_point`, function (err, result, fields) {
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


const getLoyalityProgramActive = function (info, callback) {
    console.log(info);
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    connection.query(`select * from loyality_dt`, function (err, result, fields) {
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


const retriveListDetailPayment = function (info, callback) {
    console.log(info);
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    connection.query(`select * from pospayment where transno='${info.transno}' and active='1' and pymtmthd<>'Discount'`, function (err, result, fields) {
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


const getOutletUserSelected = function (info, callback) {
    console.log(info);
    connection.query(`USE profiler;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    connection.query(`select * from outlet_access left join outlet on outlet.outletcd=outlet_access.outletcode where usercode='${info.email}' and outletcode='${info.outletcode}'`, function (err, result, fields) {
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




const getListUser = function (info, callback) {
    console.log(info);
    connection.query(`USE profiler;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    connection.query(`select * from users 
    left join outlet_access on users.usercd=outlet_access.usercode
    left join outlet on outlet_access.outletcode=outlet.outletcd
    where outletcode='${info.outletcode}'

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

const checkEmailExist = function (info, callback) {
    console.log(info);
    connection.query(`USE profiler;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    connection.query(`select * from users where email='${info.email}'`, function (err, result, fields) {
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
    connection.query(`SELECT usercd,accesscd AS access,accessdesc FROM users
    LEFT JOIN acess_subcription ON users.subscription=acess_subcription.subscriptioncd
     WHERE email='${info.usercd}'`, function (err, result, fields) {
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
    connection.query(`insert into posdetail (trdt,outletcd,transno,transno1,itemseq,itemcode,itemdesc,description,qty,rvncoa,taxcoa,servicecoa,othercoa,rateamtitem,rateamtservice,rateamttax,revenueamt,serviceamt,taxamt,otheramt,discpct,discamt,totalaftdisc,orderno,active,usercreate,createdt,guestname,totalcost,ratecostamt) VALUES ?`, [info.data], function (err, result, fields) {
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
    connection.query(`update promo_master set promodesc="${info.data.promodesc}",amount=${info.data.amount},pct=${info.data.pct},type="${info.data.type}",maxdisc=${info.data.maxdisc},mindisc=${info.data.mindisc} where promocd='${info.data.promocd}'`, function (err, result, fields) {
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


const updatePointCustomers = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`update customers set points = "${info.points}" where fullname="${info.fullname}`, function (err, result, fields) {
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




const updateTemplatePrinter = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`update printer_settings set logourl='${info.logourl}',header='${info.header}',footer='${info.footer}',headerbold='${info.headerbold}',footerbold='${info.footerbold}'`, function (err, result, fields) {
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
    connection.query(`update users set uuid = "${info.data.uuid}", urlpict="${info.data.urlpic}",fullname="${info.data.fullname}",lastsignin="${info.data.lastsignin}",token="${info.data.token}" where email='${info.data.email}'`, function (err, result, fields) {
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



const updatePaymentFirst = function (info, callback) {
    connection.query(`USE profiler;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`update users set subscription = "${info.subsrcription}", pytransaction="${info.pytransaction}",paymentcheck="${info.paymentcheck}" where email='${info.email}'`, function (err, result, fields) {
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


const Update7DayActive = function (info, callback) {
    connection.query(`USE profiler;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`update users set expireddate='${info.date}',referral='${info.referral}',telp='${info.telp}' where email='${info.email}'`, function (err, result, fields) {
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


const updatePaymentVerification = function (info, callback) {
    connection.query(`USE profiler;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`update users set paymentcheck="${info.paymentcheck}" where email='${info.email}'`, function (err, result, fields) {
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

const deactiveTable = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`update tables set active='0' where id='${info.id}' `, function (err, result, fields) {
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


const deactiveTableAll = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`update tables set active='0'`, function (err, result, fields) {
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

const deActivePackageMenu = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`update item_master set slsfl='0' where itemcode= '${info.itemcode}'`, function (err, result, fields) {
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



const updatePosdetailSeflorder = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`update posdetail set guestname='${info.guest}',tables_id='${info.table}',cono='${info.phone}' where transno='${info.transno}'`, function (err, result, fields) {
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

const updateTablestrno = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`update posdetail set tables_id='${info.table}' where transno='${info.transno}'`, function (err, result, fields) {
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


const updateTables_use = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`update tables set transno='${info.transno}' where active='1' and tablecd='${info.tablecd}'`, function (err, result, fields) {
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

const cleartable = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`update tables set transno='' where active='1' and transno='${info.transno}'`, function (err, result, fields) {
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
    SET description='${info.data.description}',qty='${info.data.qty}',rateamtitem='${info.data.rateamtitem}',discamt='${info.data.discamt}',discpct='${info.data.discpct}',revenueamt='${info.data.revenueamt}',taxamt='${info.data.taxamt}',serviceamt='${info.data.serviceamt}',totalaftdisc='${info.data.totalaftdisc}',salestype='${info.data.salestype}',notes='${info.data.note}' WHERE id = '${info.data.id}'`, function (err, result, fields) {
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


const getCategory = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`select * from item_master group by ctg`, function (err, result, fields) {
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


const refundTrans = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`UPDATE posdetail SET active='2',reason='${info.reason}' where transno='${info.transno}' `, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);


        console.log('Database : ' + connection.state);
    });
    connection.query(`UPDATE pospayment SET active='2' where transno='${info.transno}' `, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);


        console.log('Database : ' + connection.state);
    });

    connection.query(`UPDATE poscondiment SET active='2' where transno='${info.transno}' `, function (err, result, fields) {
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


const updateSplit = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);

    connection.query(`UPDATE posdetail SET split=split+1 where transno='${info.transno}' and itemseq='${info.itemseq}' `, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        //console.log(result);
        // callback(result);
        console.log('Database : ' + connection.state);
    });
    connection.query(`UPDATE poscondiment SET split=split+1 where transno='${info.transno}' and itemseq='${info.itemseq}' `, function (err, result, fields) {
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

const updateSplitCondiment = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);

    connection.query(`UPDATE poscondiment SET split=split+1 where transno='${info.transno}' and itemseq='${info.itemseq}' `, function (err, result, fields) {
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



const passwordreset = function (info, callback) {
    connection.query(`USE profiler;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);


    connection.query(`UPDATE users set password='${info.password}' where email='${info.email}' `, function (err, result, fields) {
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
    ,stock-IFNULL((SELECT SUM(qty) AS qty FROM posdetail WHERE item_master.itemcode=posdetail.itemcode and posdetail.active='1'),0)+IFNULL((SELECT (CASE WHEN type_tr='1010' THEN SUM(qty) WHEN type_tr='1020' THEN SUM(-qty) ELSE 0 END) AS qty FROM transaction_bo WHERE transaction_bo.product=item_master.itemcode GROUP BY product),0) AS stock
    ,pathimage
    ,description
    ,trackstock
    ,barcode
    ,sku
    ,COUNT(condimentcode) AS modifiers
    ,item_master.id
    ,item_master.pricelist as pricelist
    ,item_master.multiprice as multiprice
    ,packageflag
    ,onlineflag
     FROM item_master 
     
    LEFT JOIN condiment_map 
    ON item_master.itemcode=condiment_map.itemcode 
    and condiment_map.active='1' 
    where outletcode='${info.data}' and slsfl='1'  GROUP BY itemcode`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }

        callback(result);
        console.log(result);

        console.log('Database : ' + connection.state);
    });
}


const getProductByCtg = function (info, callback) {
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
    ,stock-IFNULL((SELECT SUM(qty) AS qty FROM posdetail WHERE item_master.itemcode=posdetail.itemcode and posdetail.active='1'),0)+IFNULL((SELECT (CASE WHEN type_tr='1010' THEN SUM(qty) WHEN type_tr='1020' THEN SUM(-qty) ELSE 0 END) AS qty FROM transaction_bo WHERE transaction_bo.product=item_master.itemcode GROUP BY product),0) AS stock
    ,pathimage
    ,description
    ,trackstock
    ,barcode
    ,sku
    ,COUNT(condimentcode) AS modifiers
    ,item_master.id
    ,item_master.pricelist as pricelist
    ,item_master.multiprice as multiprice
    ,packageflag
    ,onlineflag
     FROM item_master 
     
    LEFT JOIN condiment_map 
    ON item_master.itemcode=condiment_map.itemcode 
    and condiment_map.active='1' 
    where slsfl='1' and ctg='${info.ctg}' GROUP BY itemcode`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }

        callback(result);

        console.log('Database : ' + connection.state);
    });
}

const getRefundTransaksi = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`SELECT * FROM posdetail WHERE active='2' AND trdt BETWEEN '${info.fromdate}' AND '${info.todate}' GROUP BY transno`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }

        callback(result);

        console.log('Database : ' + connection.state);
    });
}



const checkStock = function (info, callback) {
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
    ,stock-IFNULL((SELECT SUM(qty) AS qty FROM posdetail WHERE item_master.itemcode=posdetail.itemcode and posdetail.active='1'),0)+IFNULL((SELECT (CASE WHEN type_tr='1010' THEN SUM(qty) WHEN type_tr='1020' THEN SUM(-qty) ELSE 0 END) AS qty FROM transaction_bo WHERE transaction_bo.product=item_master.itemcode GROUP BY product),0) AS stock
    ,pathimage
    ,description
    ,trackstock
    ,barcode
    ,sku
    ,COUNT(condimentcode) AS modifiers
    ,item_master.id
    ,item_master.pricelist as pricelist
    ,item_master.multiprice as multiprice
    ,packageflag
    ,onlineflag
     FROM item_master 
     
    LEFT JOIN condiment_map 
    ON item_master.itemcode=condiment_map.itemcode 
    and condiment_map.active='1' 
    where slsfl='1' and item_master.itemcode='${info.itemcode}'  GROUP BY itemcode`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }

        callback(result);

        console.log('Database : ' + connection.state);
    });
}


const getPackageMenu = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`SELECT item_master.slsfl,packagecd,packagedesc,item_master.itemcode,item_master.itemdesc,SUM(qty) AS qty FROM item_package
    LEFT JOIN item_master ON item_package.packagecd=item_master.itemcode
    GROUP BY packagecd`, function (err, result, fields) {
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

const getRoleStaff = function (info, callback) {
    connection.query(`USE profiler;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`select * from staffrole`, function (err, result, fields) {
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


const getAccessStaffOutlet = function (info, callback) {
    connection.query(`USE profiler;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`SELECT users.usercd,users.email,access_user.roledesc,access_user.accesscode,access_user.accessdesc,access_user.id 
    FROM access_user LEFT JOIN users ON access_user.usercode=users.email WHERE outletcd='${info.outletcd}' and usercd='${info.usercd}'`, function (err, result, fields) {
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

const getStaff = function (info, callback) {
    connection.query(`USE profiler;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`SELECT users.usercd,users.email,access_user.roledesc,access_user.accesscode,access_user.accessdesc,access_user.id 
    FROM access_user LEFT JOIN users ON access_user.usercode=users.email WHERE outletcd='${info.outletcd}' GROUP BY usercd`, function (err, result, fields) {
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


const getMainAccess = function (info, callback) {
    connection.query(`USE profiler;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`select * from accessmain`, function (err, result, fields) {
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


const deleteAksesStaff = function (info, callback) {
    connection.query(`USE profiler;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`delete from access_user where usercode='${info.usercode}' and id='${info.id}'`, function (err, result, fields) {
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

const getListStaffOutlet = function (info, callback) {
    connection.query(`USE profiler;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`SELECT * FROM outlet_access LEFT JOIN users ON users.email=outlet_access.usercode
    WHERE outlet_access.outletcode='${info.outletcode}'`, function (err, result, fields) {
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


const getRoleAccessTemplate = function (info, callback) {
    connection.query(`USE profiler;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`select * from access_template where jobcd='${info.jobcd}'`, function (err, result, fields) {
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

const insertAccessOutletUser = function (info, callback) {
    connection.query(`USE profiler;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`INSERT INTO access_user(usercode,rolecode,roledesc,accesscode,accessdesc,outletcd,subscription)
    SELECT email,jobcd AS rolecode,jobdesc AS roledesc,accesscode,accessdesc,outlet_access.outletcode,subscription  FROM users 
    LEFT JOIN access_template ON users.level=access_template.jobdesc
    LEFT JOIN outlet_access ON outlet_access.usercode=users.email
    WHERE email='${info.usercode}'
    
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


const insertItemFromHO = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    var cmd = ` INSERT INTO item_master (outletcode,itemcode,subitemcode,itemdesc,slsamt,costamt,slsnett,taxpct,svchgpct,revenuecoa,taxcoa,svchgcoa,slsfl,costcoa,ctg,stock,pathimage,description,trackstock,barcode,sku,multiprice,pricelist,packageflag,onlineflag)
    SELECT '${info.dbname}',itemcode,subitemcode,itemdesc,slsamt,costamt,slsnett,taxpct,svchgpct,revenuecoa,taxcoa,svchgcoa,slsfl,costcoa,ctg,stock,pathimage,description,trackstock,barcode,sku,multiprice,pricelist,packageflag,onlineflag FROM HOEs2077.item_master WHERE itemcode NOT IN (SELECT itemcode FROM ${info.dbname}.item_master);`
   
    var cmd2 = `INSERT INTO condiment_master (itemcode,condimentdesc,optioncode,optiondesc,amount,qty,condimenttype,id,taxpct,servicepct,taxamount,serviceamount,nettamount,active )
    SELECT itemcode,condimentdesc,optioncode,optiondesc,amount,qty,condimenttype,id,taxpct,servicepct,taxamount,serviceamount,nettamount,active FROM HOEs2077.condiment_master WHERE itemcode NOT IN (SELECT itemcode FROM ${info.dbname}.condiment_master);`
   
    var cmd3 = `INSERT INTO condiment_map ( itemcode,condimentcode,active )
    SELECT itemcode,condimentcode,active FROM HOEs2077.condiment_map WHERE itemcode NOT IN (SELECT itemcode FROM ${info.dbname}.condiment_map);`
    connection.query(cmd, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        console.log(result);
        console.log('Database : ' + connection.state);
    });
    connection.query(cmd2, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
        console.log(result);
        console.log('Database : ' + connection.state);
    });
    connection.query(cmd3, function (err, result, fields) {
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



const getAccessUserOutlet = function (info, callback) {
    connection.query(`USE profiler;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`SELECT * FROM access_user WHERE usercode='${info.email}' AND outletcd='${info.outletcd}'`, function (err, result, fields) {
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

const getPaymentMaster = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`SELECT * 
     FROM pymaster where  active='1'
     
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

const getCustomers = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`SELECT * FROM customers 
     
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

const getReportRingkasan = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`
    SELECT 1 AS oke,X.trdt
    ,SUM(revenuegross)  AS revenuegross
    ,SUM(pajak) AS pajak,SUM(service) AS service
    , SUM(totalnett) AS totalnett,SUM(totalpayment) AS totalpayment 
    ,sum(totalcost) as totalcost
    FROM (
  SELECT 1 AS oke,trdt,SUM(IFNULL(revenueamt,0)) AS revenuegross
      ,SUM(IFNULL(taxamt,0)) AS pajak
      ,SUM(IFNULL(serviceamt,0)) AS service
      ,SUM(IFNULL(totalaftdisc,0)) AS totalnett 
      ,SUM(totalcost) AS totalcost
      ,0 AS totalpayment
      FROM posdetail
       WHERE trdt BETWEEN '${info.fromdate}' AND '${info.todate}'AND active='1'
       # group by trdt
       
       UNION 
       
       SELECT 1 AS oke, trdt,SUM(IFNULL(totalamt,0)) AS revenuegross
      ,SUM(IFNULL(totaltaxamt,0)) AS pajak
      ,SUM(IFNULL(totalserviceamt,0)) AS service
      ,SUM(IFNULL(totalnett,0)) AS totalnett 
      ,0 AS totalcost
      ,0 AS totalpayment
       FROM poscondiment
       
       WHERE trdt BETWEEN '${info.fromdate}' AND '${info.todate}' AND active='1'
       
       UNION 
       SELECT 1 AS oke 
       ,trdt 
       ,0 AS revnuegross
       ,0 AS pajak
       ,0  AS service
       ,0 AS totalnett
       ,0 AS totalcost
       ,SUM(IFNULL(totalamt,0)) AS totalpayment 
       FROM pospayment  WHERE trdt BETWEEN '${info.fromdate}' AND '${info.todate}'
       AND active='1'
       
       ) X
       
  
       
       GROUP BY oke
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

const getReportRingkasanCombine = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });

    connection.query(`
    SELECT 1 AS oke,X.trdt,SUM(revenuegross)  AS revenuegross,SUM(pajak) AS pajak,SUM(service) AS service, SUM(totalnett) AS totalnett,SUM(totalpayment) AS totalpayment FROM (SELECT 1 AS oke,trdt,SUM(IFNULL(revenueamt,0)) AS revenuegross
    ,SUM(IFNULL(taxamt,0)) AS pajak
    ,SUM(IFNULL(serviceamt,0)) AS service
    ,SUM(IFNULL(totalaftdisc,0)) AS totalnett 
    FROM posdetail
     WHERE trdt BETWEEN '${info.fromdate}' AND '${info.todate}' AND active='1'
     # group by trdt
     
     UNION 
     
     SELECT 1 AS oke, trdt,SUM(IFNULL(totalamt,0)) AS revenuegross
    ,SUM(IFNULL(totaltaxamt,0)) AS pajak
    ,SUM(IFNULL(totalserviceamt,0)) AS service
    ,SUM(IFNULL(totalnett,0)) AS totalnett 
    FROM poscondiment
     WHERE trdt BETWEEN '${info.fromdate}' AND '${info.todate}' AND active='1') X
     
     LEFT JOIN (SELECT trdt,SUM(IFNULL(totalamt,0)) AS totalpayment FROM pospayment  WHERE trdt BETWEEN '${info.fromdate}' AND '${info.todate}' AND active='1')Y
     
     ON X.trdt=Y.trdt
     
     GROUP BY oke

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

const DetailMenuItemTerjual = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`
    SELECT itemcode,itemdesc,SUM(qty) AS qty,SUM(revenueamt) AS nettrevenue,'Main Item' FROM posdetail
    WHERE trdt BETWEEN '${info.fromdate}' AND '${info.todate}' AND active= '1' GROUP BY itemcode
    order by qty desc 
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


const grossMargin = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`
    SELECT itemdesc,SUM(qty) AS qty,SUM(revenueamt) AS nettrevenue,'Main Item',sum(totalcost) as totalcost,ifnull(ratecostamt,0) as  ratecostamt  FROM posdetail
    WHERE trdt BETWEEN '${info.fromdate}' AND '${info.todate}' AND active= '1' GROUP BY itemcode
    order by qty desc 
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

const getTrnoBO = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`
   select trnonext from transaction_typ_bo where transtype='${info.type}'
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



const getSummaryCashierDetail = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`SELECT * FROM pospayment WHERE trdt BETWEEN '${info.fromdate}' AND '${info.todate}' AND active='1' and pymtmthd<>'Discount'
     
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


const checkVerifiedPayment = function (info, callback) {
    connection.query(`USE profiler;`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`select * from users where email='${info.email}'`, function (err, result, fields) {
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




const getTableList = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`select * from tables where active='1'`, function (err, result, fields) {
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


const checkLastSplit = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`select max(split) as split from posdetail where transno='${info.transno}' group by transno`, function (err, result, fields) {
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

const getTablesNotUse = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`select * from tables where active='1' and transno=''`, function (err, result, fields) {
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
    ,guestname
    ,tables_id as tablesid
    ,split,totalcost,ratecostamt
    FROM 
    posdetail WHERE transno='${info.data}' AND active= '1' AND split='1'
    
    
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
    ,'' as guestname
    ,'' as tablesid
    , split ,0 as totalcost,0 as ratecostamt
    FROM poscondiment WHERE transno='${info.data}' AND active= '1' AND split='1'
    
    
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
    0 as totalcost,
    0 as ratecostamt,
    SUM(IFNULL((X.totalaftdisc),0)) AS totalaftdisc
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
    WHERE transno = "${info.data}" and split='1'
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
      AND pymtmthd = 'Discount' AND split='1') AS X`, function (err, result, fields) {
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

const getAccessSettingsUser = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`select * from outlet_settings 
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

const getAccessCodevoid = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`select * from user_access where accesscode='${info.accesscode}' 
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
const getCategoryItem = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(``, function (err, result, fields) {
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


const getCashierSummary = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`SELECT trdt,pscd,transno,transno1,SUM(totalamt) AS ftotamt,compdesc,pymtmthd FROM pospayment 
    WHERE trdt BETWEEN '${info.fromdate}' AND '${info.todate}' AND active='1' 
    AND pymtmthd<>'Discount' GROUP BY pymtmthd,compdesc`, function (err, result, fields) {
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


const getAnalisaRingkasan = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`select trdt,outletcd,transno,itemcode,sum(revenueamt) as revenueamt from (
        select trdt,outletcd,transno,itemcode,sum(revenueamt) as revenueamt from posdetail
         where trdt between '${info.fromdate}' and '${info.todate}' and active='1'  group by trdt
         union 
         SELECT trdt,outletcode,transno,itemcode,SUM(totalamt) AS revenueamt FROM poscondiment where trdt between '${info.fromdate}' and '${info.todate}' and active='1' GROUP BY trdt)X
         group by trdt order by trdt
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

const getReportDetailMenuSold = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`SELECT itemcode,itemdesc,SUM(qty) AS qty,SUM(revenueamt) AS revenueamt FROM posdetail WHERE trdt BETWEEN '${info.fromdate}' and '${info.todate}' GROUP BY itemcode ORDER BY qty DESC
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

const getReportDetailMenuSoldDetail = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`SELECT * FROM posdetail WHERE trdt BETWEEN '${info.fromdate}' and '${info.todate}'  AND itemdesc='${info.itemdesc}'
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

const getAnalisaRingkasanTopitem = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`SELECT trdt,outletcd,transno,itemcode,itemdesc,SUM(revenueamt) AS revenueamt,SUM(qty) AS qty FROM posdetail
    WHERE trdt BETWEEN '${info.fromdate}' and '${info.todate}' AND active='1'  
    GROUP BY itemcode 
   ORDER BY qty DESC
   LIMIT 1
   
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

const getAnalisaRingkasanItemKuranglaku = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`SELECT trdt,outletcd,transno,itemcode,itemdesc,SUM(revenueamt) AS revenueamt,SUM(qty) AS qty FROM posdetail
    WHERE trdt BETWEEN '${info.fromdate}' and '${info.todate}' AND active='1'  
    GROUP BY itemcode 
   ORDER BY qty asc
   LIMIT 1
   
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

const updateStrictUser = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`update outlet_settings set strictuser='${info.strictuser}'`, function (err, result, fields) {
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


const updateOnlineItem = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`update item_master set onlineflag=${info.onlineflag} where itemcode='${info.itemcode}'`, function (err, result, fields) {
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

const updateCustomers = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`update customers set fullname='${info.fullname}',title='${info.tittle}',phone='${info.phone}',email='${info.email}',address='${info.address}' where customercd='${info.customercd}'`, function (err, result, fields) {
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
    connection.query(`select sum(totalamt) as totalamt from pospayment where transno1="${info.transno}" and pymtmthd<>"Discount" and active="1" and split='1'`, function (err, result, fields) {
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


const getPenjualanRataRata = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`SELECT SUM(totalaftdisc/Y.transno) AS totalaftdisc FROM (SELECT IFNULL(SUM(totalaftdisc),0) AS totalaftdisc FROM posdetail WHERE trdt BETWEEN DATE_ADD("${info.trdt}", INTERVAL -30 DAY) AND "${info.trdt}" AND active='1'
    UNION
    SELECT IFNULL(SUM(totalnett),0) AS totalaftdisc FROM poscondiment WHERE trdt BETWEEN DATE_ADD("${info.trdt}", INTERVAL -30 DAY) AND "${info.trdt}" AND active='1')X,(SELECT COUNT(transno) AS transno FROM (SELECT COUNT(transno) AS transno FROM posdetail WHERE trdt BETWEEN DATE_ADD("${info.trdt}", INTERVAL -30 DAY) AND "${info.trdt}" AND active='1'
    UNION
    SELECT COUNT(transno) AS transno  FROM poscondiment WHERE trdt BETWEEN DATE_ADD("${info.trdt}", INTERVAL -30 DAY) AND "${info.trdt}" AND active='1')Y)Y
    
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
    connection.query(`SELECT trdt,transno,SUM(totalaftdisc) AS totalaftdisc,usercreate,createdt,guestname,tablesid,0 as totalcost,0 as ratecostamt  FROM (
        SELECT trdt,transno,SUM(totalaftdisc) AS totalaftdisc,usercreate,createdt,guestname,tables_id AS tablesid FROM (
                SELECT trdt,transno,SUM(totalaftdisc) AS totalaftdisc,usercreate,createdt,guestname,tables_id  FROM posdetail WHERE active='1' and description<>'refund mode' GROUP BY transno
                UNION 
                SELECT trdt,transno,SUM(totalnett) AS totalaftdisc,'' AS usercreate,createdt,'' AS guestname,'' AS tablesid FROM  poscondiment WHERE active='1' GROUP BY transno)X 
                GROUP BY transno
                UNION 
                SELECT trdt,transno,SUM(-totalamt) AS totalaftdisc,usercreate,createdate,'' AS guestname,'' AS tablesid FROM pospayment WHERE active='1' and trdesc<>'refund mode'  GROUP BY transno )X GROUP BY transno HAVING totalaftdisc`, function (err, result, fields) {
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

const getOutstandingBillTransno = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`SELECT trdt,transno,SUM(totalaftdisc) AS totalaftdisc,usercreate,createdt,guestname,tablesid  FROM (
        SELECT trdt,transno,SUM(totalaftdisc) AS totalaftdisc,usercreate,createdt,guestname,tables_id AS tablesid FROM (
                SELECT trdt,transno,SUM(totalaftdisc) AS totalaftdisc,usercreate,createdt,guestname,tables_id  FROM posdetail WHERE active='1' GROUP BY transno
                UNION 
                SELECT trdt,transno,SUM(totalnett) AS totalaftdisc,'' AS usercreate,createdt,'' AS guestname,'' AS tablesid FROM  poscondiment WHERE active='1' GROUP BY transno)X 
                GROUP BY transno
                UNION 
                SELECT trdt,transno,SUM(-totalamt) AS totalaftdisc,usercreate,createdate,'' AS guestname,'' AS tablesid FROM pospayment WHERE active='1' GROUP BY transno )X 
                WHERE transno='${info.transno}'   
                GROUP BY transno HAVING totalaftdisc`, function (err, result, fields) {
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
    connection.query(`select * from pospayment where transno1='${info.transno1}' and active='1' and pymtmthd<>'Discount'and split='1'`, function (err, result, fields) {
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


const getTemplatePrinter = function (info, callback) {
    connection.query(`USE ${info.dbname};`, function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
            throw err;
        }
    });
    console.log(info);
    connection.query(`select * from printer_settings`, function (err, result, fields) {
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




module.exports = { insertItemFromHO, updateOnlineItem, updatePosdetailSeflorder, insertGuestPosdetail, getProductByCtg, getCategory, insertAccessToUser, getMainAccess, deleteAksesStaff, grossMargin, getRefundTransaksi, refundTrans, getStaff, getAccessStaffOutlet, checkStock, retriveListDetailPayment, insertAccessCodeStrict, insertAbsensi, getListStaffOutlet, checkExpiredDate, Update7DayActive, checkPointCustomer, updatePointCustomers, getLoyalityProgramActive, getRewardData, checkProgramExist, insertRewardSetting, insertLoyalityProgram, checkTypeLoyality, updateCustomers, checkPhoneNumber, insertRegisterCustomer, getCustomers, insertAccessOutletUser, getAccessUserOutlet, insertAccessUser, getRoleAccessTemplate, getTrnoBO, insertAdujsmentStock, updateSplitCondiment, getOutletUserSelected, DetailMenuItemTerjual, getReportRingkasan, passwordreset, getPenjualanRataRata, getListUser, insertRegisterUserNew, insertAccessOutlet, getRoleStaff, deActivePackageMenu, getPackageMenu, createPackageMenu, checkEmailExist, getTemplatePrinter, updateTemplatePrinter, updateStrictUser, getOutstandingBillTransno, getAccessCodevoid, getAccessSettingsUser, getReportDetailMenuSoldDetail, getReportDetailMenuSold, getAnalisaRingkasanItemKuranglaku, getAnalisaRingkasanTopitem, getAnalisaRingkasan, getSummaryCashierDetail, createCompany, getPaymentMaster, checkLastSplit, updateSplit, updatePaymentVerification, checkVerifiedPayment, updatePaymentFirst, insertRegisterUser, cleartable, getTablesNotUse, updateTables_use, updateTablestrno, deactiveTableAll, deactiveTable, getTableList, insertTableMaster, getAccessUser, checkUserFromOauth, checkOutletUser, getUserinfofromManual, updateUserGmail, listdataChart, getSalesMonthly, getSales7daySum, getSalesTodaySum, deactiveTipeTrans, getTransaksitipe, insert_transaksitipe, deactiveCondiment, updateCondimentTrno, getDetailCondimentTrno, deactiveCondimentByAll, deactivePosCondimentByID, insertPoscondiment, getItemCondiment, condimentMasterCreate, mapping_Condiment, outletcreate, updatePosdetailGuest, checkTransactionNo, getCashierSummary, getProductByItemcode, getItemByBarcode, getSummaryPyTrno, getOutstandingBill, getDetailPyTrno, getTrnoData, getPromoList, getSumTrno, insertPromo, insertDetail, insertPayment, getCTG, updateItem, deactivePospaymentTrans, deactivePosdetail, deactivePromoTrno, deactivePosdetailTrans, delPromo, updateTrno, updatePosdetail, updatePromo, delCTG, delitem, trantpInsert, insertProduct, outlet_user, getCondimentList, getOutletUser, createDB, categoryCreate, getProduct, connection };