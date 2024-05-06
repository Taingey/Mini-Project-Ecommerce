"use client";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/homepage/Footer";
import { useGetProductsQuery } from "@/redux/features/service/ecommerce";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "description", headerName: "Description", width: 200 },
  { field: "price", headerName: "Price", type: "number", width: 90 },
  { field: "quantity", headerName: "Quantity", type: "number", width: 100 },
];

const Shop = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { data: products, error, isLoading } = useGetProductsQuery({
    page: 1,
    pageSize: 10,
  });

  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.push("/login");
    }
  }, [session, status, router]);

  if (status === "loading" || isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto grid gap-3">
      <div>
        <Link href="/createProduct" className="bg-black text-white py-3 px-2">
          Create Product
        </Link>
      </div>
      <div className="w-full">
        <DataGrid rows={products} columns={columns} pageSize={5} checkboxSelection />
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
