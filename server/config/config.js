// =======================
//puerto
// =======================

process.env.PORT = process.env.PORT || 3000;

// =======================
// Entorno
// =======================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =======================
// Base de datos
// =======================

let urlDB;

if (process.env.NODE_ENV == 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://karlinux:Gua19200176@ds131814.mlab.com:31814/cafe';
}

process.env.urlDB = urlDB;