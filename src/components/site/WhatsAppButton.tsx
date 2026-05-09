import { whatsappUrl } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-8 right-8 z-40 group flex items-center gap-3 bg-white border border-gray-100 p-2 pr-6 rounded-full shadow-2xl hover:scale-105 transition-transform"
    >
      <div className="w-12 h-12 bg-[#25D366] text-white flex items-center justify-center rounded-full shadow-lg">
        <svg viewBox="0 0 32 32" className="h-6 w-6 fill-current" aria-hidden="true">
          <path d="M19.11 17.21c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17c-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.79-1.67-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.2 5.07 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM16.04 4C9.95 4 5 8.95 5 15.04c0 1.95.51 3.85 1.47 5.52L5 26l5.6-1.46a11.04 11.04 0 0 0 5.43 1.41h.01c6.09 0 11.03-4.95 11.03-11.04 0-2.95-1.15-5.71-3.23-7.79A10.96 10.96 0 0 0 16.04 4z" />
        </svg>
      </div>
      <span className="text-[10px] font-black uppercase tracking-widest text-ink">WhatsApp</span>
    </a>
  );
}
