//@ts-ignore

export function Card({ content }) {
  const username =
    typeof content.userId === "object"
      ? content.userId.username || content.userId.email || "Unknown User"
      : content.userId;

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 my-3 w-full max-w-md mx-auto border">
      <p className="text-gray-800 text-lg mb-2">{content.content}</p>
      <div className="flex justify-between text-sm text-gray-500">
        <p>🧑 {username}</p>
        <p>📅 {new Date(content.createdAt).toLocaleString()}</p>
      </div>
      <div className="flex justify-between mt-3">
        <span>👍 {content.likes?.length || 0} Likes</span>
        <span>💬 {content.comments?.length || 0} Comments</span>
      </div>
    </div>
  );
}
