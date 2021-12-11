import jsPDF from "jspdf";
import "jspdf-autotable";
import myImage from '../myImage.jpeg'

// define a generatePDF function that accepts a tickets argument
const generatePDF = tickets => {
  const doc = new jsPDF();
  // define the columns we want and their titles
  const tableColumn = ["Id", "Title", "Issue", "Status", "Closed on"];
  const tableRows = [];
  // for each ticket pass all its data into an array
  tickets.forEach(ticket => {
    const ticketData = [
      ticket.id,
      ticket.title,
      ticket.request,
      ticket.status,
      "27-04-1995"
      // called date-fns to format the date on the ticket
      //format(new Date('27-04-1997'), "yyyy-MM-dd")
    ];
    tableRows.push(ticketData);
  });

  // startY is basically margin-top
  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  const date = Date().split(" ");
  
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  // ticket title. and margin-top + margin-left
  doc.text("Closed tickets within the last one month.", 14, 15);

  doc.text(20, 30, "Before introducing font size")
  doc.setFontSize(22)
  doc.text( 70, 30, "Let us try changing the font size")
  //doc.addImage(myImage, 'JPEG', 15, 40, 180, 160);

  // we define the name of our PDF file.
  doc.save(`report_${dateStr}.pdf`);
};
export default generatePDF;