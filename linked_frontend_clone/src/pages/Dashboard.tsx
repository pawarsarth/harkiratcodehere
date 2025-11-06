import { useContent } from "../hooks/useContent";
import { Card } from "../components/Card";

export function Dashboard() {
  const contents = useContent();

  console.log("Dashboard contents:", contents);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-semibold text-center mb-6">User Posts</h1>

      <div className="flex flex-col items-center">
        {contents.length === 0 ? (
          <p className="text-gray-600">No posts found...</p>
        ) : (
          contents.map((post) => (
            <Card key={post._id} content={post} />
          ))
        )}
      </div>
    </div>
  );
}
