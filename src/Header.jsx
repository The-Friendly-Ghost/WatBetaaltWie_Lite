export default function Header() {
  return (
    <div className="absolute flex justify-center items-center h-16 w-full bg-gradient-to-b from-slate-200/80 via-slate-200/80 to-transparent ">
      {/* <h1 className="text-3xl font-inter">WatBetaaltWie</h1> */}
      <div className="h-8 w-32 bg-black rounded-full px-2 flex items-center justify-between">
        <div className="h-5 w-5 bg-slate-800 rounded-full"></div>
        <div className="h-5 w-15 bg-slate-800 rounded-full"></div>
      </div>
    </div>
  );
}
