const path = require('path');

const fs = require('fs');

const folder1 = '1';
const folder2 = '2';
const folder3 = '3';
const folder4 = '4';
const folder5 = '5';
const file1 = '1.txt';
const file2 = '2.txt';
const file3 = '3.txt';
const file4 = '4.txt';
const file5 = '5.txt';

fs.mkdir(folder1, err => {
    if (err) {
        console.error(`error ${err}`)
    } else {
        console.log(`${folder1} done`)
    }
});

const filePath1 = `${folder1}/${file1}`;

fs.writeFile(filePath1, '', err => {
    if (err) {
        console.error(`error file: ${err}`)
    } else {
        console.log(`file ${file1} created`)
    }
});

fs.mkdir(folder2, err => {
    if (err) {
        console.error(`error ${err}`)
    } else {
        console.log(`${folder2} done`)
    }
});

const filePath2 = `${folder2}/${file2}`;

fs.writeFile(filePath2, '', err => {
    if (err) {
        console.error(`error file: ${err}`)
    } else {
        console.log(`file ${file2} created`)
    }
});

fs.mkdir(folder3, err => {
    if (err) {
        console.error(`error ${err}`)
    } else {
        console.log(`${folder3} done`)
    }
});

const filePath3 = `${folder3}/${file3}`;

fs.writeFile(filePath3, '', err => {
    if (err) {
        console.error(`error file: ${err}`)
    } else {
        console.log(`file ${file3} created`)
    }
});