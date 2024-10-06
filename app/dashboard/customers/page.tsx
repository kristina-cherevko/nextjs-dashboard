
// export default function Page() {
//     return <p>Customers page</p>
// }
import { Suspense } from 'react';
import { fetchCustomers, fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table'
import { lusitana } from '@/app/ui/fonts';

export default async function Page({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const customers = await fetchFilteredCustomers(query)

  return (
    <div className="w-full">
  
    
       <Suspense key={query + currentPage} fallback={<div>Loading... </div>}>
        <CustomersTable customers={customers} />
      </Suspense>
     
    </div>
  );
}