import { Phone, MessageCircle } from "lucide-react";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col gap-3">

      {/* WHATSAPP */}
      <a
        href="https://wa.me/919810213744"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center
                   w-14 h-14 rounded-full
                   bg-green-500 hover:bg-green-600
                   shadow-lg transition"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="text-white" size={26} />
      </a>

      {/* CALL */}
      <a
        href="tel:9810213744"
        className="flex items-center justify-center
                   w-14 h-14 rounded-full
                   bg-blue-500 hover:bg-blue-600
                   shadow-lg transition"
        aria-label="Call Now"
      >
        <Phone className="text-white" size={26} />
      </a>
    </div>
  );
}
