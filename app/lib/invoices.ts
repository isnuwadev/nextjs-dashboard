import prisma from "./prisma";

//Functions that interact with the invoice table
//in the db will be exported from here
//create an invoice
// export async function createInvoice(invoiceData: {
//     customerId: string; amount: number; status: string;
//     date: Date; 
// }) {
//     return await prisma.invoice.create({
//         invoiceData
//     })
// }

//get all invoices
export async function getInvoices() { 
  return await prisma.invoice.findMany();
}

// //get the invoice amount and customer name
// //for any invoice whose amount is equal to 666
// async function getInvoicesWithSpecificAmount() {
//     const invoicesWithCustomers = await prisma.invoice.findMany({
//       where: {
//         amount: 666,
//       },
//       select: {
//         amount: true,
//         customer: {
//           select: {
//             name: true,
//           },
//         },
//       },
//     });

//     return await invoicesWithCustomers
// }

// export async function GET() {
//     try {
//     	return Response.json(await getInvoices());
//     } catch (error) {
//     	return Response.json({ error }, { status: 500 });
//     }
// }
