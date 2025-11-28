// © Mohammad Aldomi — Project Source Code

export default function ScrollIndicator() {
    return (
        <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
            <span className="text-xs uppercase tracking-widest text-gray-400"></span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-gray-400 to-transparent animate-scroll-icon" />
        </div>
    );
}