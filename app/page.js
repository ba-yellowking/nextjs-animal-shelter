import Cards from "@/app/ui/cards/Cards";
import AdminPage from "@/app/admin/page";

export default function HomePage() {
  return (
    <div>
      <main>
        <h1>Animal Shelter</h1>
        <AdminPage/>
        <Cards />
      </main>
    </div>
  );
}
