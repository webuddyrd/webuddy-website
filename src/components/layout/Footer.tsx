import { ArrowRight, Instagram, Linkedin, Twitter, Github } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-webuddy-dark pt-12 pb-12 overflow-hidden relative">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-webuddy-blue/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
                    <div className="max-w-2xl">
                        <h2 className="text-6xl md:text-8xl font-bold font-display tracking-tighter text-white mb-8">
                            Ready to <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-webuddy-blue to-webuddy-electric">Scale Up?</span>
                        </h2>
                        <button className="group flex items-center gap-4 text-2xl text-white font-medium hover:text-webuddy-blue transition-colors">
                            Start a Project <span className="bg-white/10 p-3 rounded-full group-hover:bg-webuddy-blue group-hover:text-white transition-all"><ArrowRight /></span>
                        </button>
                    </div>

                    <div className="flex flex-col gap-6 text-right">
                        <a href="mailto:hello@webuddy.com" className="text-2xl text-gray-300 hover:text-white transition-colors">
                            hello@webuddy.com
                        </a>
                        <p className="text-gray-500">
                            Santo Domingo, <br />
                            Dominican Republic
                        </p>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Webuddy. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        {[Linkedin, Twitter, Instagram, Github].map((Icon, i) => (
                            <a key={i} href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
