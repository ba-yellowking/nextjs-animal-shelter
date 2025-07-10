import Welcome from "@/app/components/welcome/Welcome";

export default function HomePage() {
  return (
    <>
      <div className="container">
        <Welcome/>
      </div>

      <div className="container alt">
        <h2>Second</h2>
      </div>
    </>
  );
}
