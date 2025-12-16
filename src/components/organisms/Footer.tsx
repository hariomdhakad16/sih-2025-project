export const Footer = () => {
    return (
        <footer className="w-full bg-white dark:bg-[#23190f] border-t border-[#e6e1db] flex justify-around py-3 px-2 z-30 md:hidden fixed bottom-0">
            <a className="flex flex-col items-center gap-1 text-primary" href="#">
                <span className="material-symbols-outlined">dashboard</span>
                <span className="text-[10px] font-bold">Home</span>
            </a>
            <a className="flex flex-col items-center gap-1 text-text-muted" href="#">
                <span className="material-symbols-outlined">library_books</span>
                <span className="text-[10px] font-medium">Lessons</span>
            </a>
            <div className="relative -top-6">
                <button className="flex items-center justify-center size-14 rounded-full bg-primary text-white shadow-lg shadow-orange-200">
                    <span className="material-symbols-outlined text-[28px]">play_arrow</span>
                </button>
            </div>
            <a className="flex flex-col items-center gap-1 text-text-muted" href="#">
                <span className="material-symbols-outlined">emoji_events</span>
                <span className="text-[10px] font-medium">Badges</span>
            </a>
            <a className="flex flex-col items-center gap-1 text-text-muted" href="#">
                <span className="material-symbols-outlined">person</span>
                <span className="text-[10px] font-medium">Profile</span>
            </a>
        </footer>
    );
};