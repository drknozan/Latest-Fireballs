
export default function Error() {
    return (
        <div className="h-[calc(100vh-80px)] flex flex-col justify-center items-center text-red-400">
            <img className="w-full h-1/2" src="/error.svg"></img>
            <h1 className="text-xl mt-6">Something went wrong.</h1>
            <h2 className="text-md">Please try again later.</h2>
        </div>
    );
}