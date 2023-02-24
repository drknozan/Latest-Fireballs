
export default function Footer() {
    return (
        <div className="flex flex-col items-center justify-center h-20 sm:h-24 bg-red-500 text-gray-100 text-xs sm:text-md gap-y-1 tracking-wider text-center">
            <p>Made by <a href="https://github.com/drknozan" className="text-slate-900 tracking-wider">drknozan</a> in 2023.</p>
            <p>All data is coming from NASA api: <a href="https://api.nasa.gov/" className="text-slate-900 tracking-wider">https://api.nasa.gov/</a></p>
        </div>
    );
}