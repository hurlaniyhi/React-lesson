import React from 'react';
import generateReport from '../helpers/generatePDF'
import usePdfMake from '../helpers/pdfMake'


const Ticket = () =>{
    let tickets = [
        {
            id: 1,
            title: "First day at work",
            request: "I want to be like you",
            status: "completed"
        },
        {
            id: 2,
            title: "Second day at work",
            request: "I want to be like you",
            status: "completed"
        },
        {
            id: 3,
            title: "Third day at work",
            request: "I want to be like you",
            status: "completed"
        },
        {
            id: 4,
            title: "Fourth day at work",
            request: "I want to be like you",
            status: "completed"
        },
        {
            id: 5,
            title: "Fifth day at work",
            request: "I want to be like you",
            status: "completed"
        },
    ];

    return(
        <div>
            <button onClick={()=> generateReport(tickets)}>
                generate Report
            </button>
            <button onClick={usePdfMake}>
                generate receipt with pdfMake
            </button>

            <table className="table" border="1px">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Issue</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {tickets.map(ticket => (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.title}</td>
                <td>{ticket.request}</td>
                <td>{ticket.status}</td>
                <td>
                  <a to={`#`}>See comments</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    )
}
export default Ticket;