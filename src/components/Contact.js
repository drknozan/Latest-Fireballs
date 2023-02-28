import { MdOutlineEmail } from 'react-icons/md';

export default function Contact() {
  return (
    <div
      id="contact"
      className="h-80 flex flex-col gap-y-4 justify-center items-center"
    >
      <h1 className="text-2xl sm:text-3xl text-slate-700">Contact Me</h1>
      <div className="flex items-center gap-x-1 text-red-400">
        <MdOutlineEmail className="w-6 h-6" />
        <p className="text-sm sm:text-md">drknozan@gmail.com</p>
      </div>
    </div>
  );
}
