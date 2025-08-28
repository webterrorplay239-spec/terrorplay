'use client';

export default function ScareAndSmoke() {
  return (
    <>
      {/* Sustos y humo al final de la web */}
      <div id="scare-jump" className="fixed bottom-0 left-0 w-full flex justify-center pointer-events-none z-[100]">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Susto" className="w-32 h-32 object-cover rounded-full shadow-2xl animate-jump-scare" style={{ opacity: 0.85 }} />
      </div>
      <div className="fixed bottom-0 left-0 w-full h-32 pointer-events-none z-[99] animate-smoke-fade" style={{background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)'}}></div>
      <style jsx global>{`
        @keyframes jump-scare {
          0% { transform: scale(0.5) translateY(100px); opacity: 0; }
          10% { transform: scale(1.2) translateY(-20px); opacity: 1; }
          30% { transform: scale(1) translateY(0); opacity: 1; }
          100% { transform: scale(1) translateY(0); opacity: 0; }
        }
        .animate-jump-scare {
          animation: jump-scare 2.5s cubic-bezier(.68,-0.55,.27,1.55) 2s 1;
        }
        @keyframes smoke-fade {
          0% { opacity: 0; }
          20% { opacity: 0.7; }
          100% { opacity: 0.5; }
        }
        .animate-smoke-fade {
          animation: smoke-fade 4s ease-in 2.5s 1;
        }
      `}</style>
    </>
  );
}
