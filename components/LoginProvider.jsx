export default function LoginProvider({
  icon,
  provider,
  type = "Button",
  action = "submit",
}) {
  return (
    <>
      {type === "Button" ? (
        <button
          type={action}
          className="transition bg rounded-md duration-[0.375s] ease-in-out group relative w-full flex justify-center gap-3 py-3 px-4 border border-slate-300 text-sm font-medium text-[#484E62] bg-transparent hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-10"
        >
          {icon} Continue with {provider}
        </button>
      ) : (
        <></>
      )}
    </>
  );
}
