var fs = require("fs");

PDFParser = require("pdf2json");

let pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
    pdfParser.on("pdfParser_dataReady", pdfData => {
          var sheetValues = pdfParser.getAllFieldsTypes();
          for(var element in sheetValues) {
                console.log(sheetValues[element].id + ": ");
                var obj = sheetValues[element].value.replace(/\r?\n|\r/g, '');
                console.log(obj);
          }
    });
 
pdfParser.loadPDF("HuYaoBang.pdf");