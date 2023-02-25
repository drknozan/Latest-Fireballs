
export default function Custom404() {
    return (
        <div className="h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-y-12 text-red-400 text-xl sm:text-2xl px-12">
            <img className="h-1/2" src="/404.svg"></img>
            <h1>Page not found.</h1>
        </div>
    );
}