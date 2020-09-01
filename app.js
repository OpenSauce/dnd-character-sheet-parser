var fs = require("fs");
PDFParser = require("pdf2json");

exports.character = {};
exports.loadCharacter = (file) => {
      let pdfParser = new PDFParser();
      pdfParser.loadPDF(file);
}

let pdfParser = new PDFParser();
pdfParser.loadPDF("HuYaoBang.pdf");

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
    pdfParser.on("pdfParser_dataReady", pdfData => {
          var sheetValues = pdfParser.getAllFieldsTypes();
          fs.writeFile('content.txt', JSON.stringify(pdfData), function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
          for(var element in sheetValues) {
                console.log(sheetValues[element].id + ": ");
                var obj = sheetValues[element].value.replace(/\r/g, '\n');
                console.log(obj);
          }
    });
