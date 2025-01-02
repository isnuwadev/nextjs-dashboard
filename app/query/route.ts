import prisma from '../lib/prisma';

//get all users
async function getInvoices() {
  const allInvoices = await prisma.user.findMany();

  return allInvoices;
}

export default async function GET() {
  try {
    const invoices = await getInvoices()
    
    return Response.json({allMyInvoices: invoices})
    
  } catch (error) {
    return Response.json({error: error});
  }
}

//fetch invoices from the server

// import { db } from "@vercel/postgres";

// const client = await db.connect();

// async function listInvoices() {
// 	const data = await client.sql`
//     SELECT invoices.amount, customers.name
//     FROM invoices
//     JOIN customers ON invoices.customer_id = customers.id
//     WHERE invoices.amount = 666;
//   `;

// 	return data.rows;
// }

// export async function GET() {
//   return Response.json({
//     message:
//       'Uncomment this file and remove this line. You can delete this file when you are finished.',
//   });
//   // try {
//   // 	return Response.json(await listInvoices());
//   // } catch (error) {
//   // 	return Response.json({ error }, { status: 500 });
//   // }
// }
