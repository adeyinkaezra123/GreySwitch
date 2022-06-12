export default function FormAction({
  handleSubmit,
  type = "Button",
  action = "submit",
  text,
}) {
  return (
    <>
      {type === "Button" ? (
        <button
          type={action}
          className="transition bg duration-[0.375s] ease-in-out group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-10"
          onSubmit={handleSubmit}
        >
          {text}
        </button>
      ) : (
        <></>
      )}
    </>
  );
}
