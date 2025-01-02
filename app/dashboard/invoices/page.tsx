import { getInvoices } from "@/app/lib/invoices";

export default async function Pages() {
    const invoices = await getInvoices();

    return (
        <section>
            <div>
                <h1>Invoices Tracker</h1>
                <h2>Using Neon: Serverless Postgres</h2>
                {invoices.map((invoice) => (
                    <li key={invoice.id}>
                        <span>{invoice.amount}</span>
                        <span>{invoice.status}</span>
                    </li>
                ))

                }
            </div>
        </section>
    );
}