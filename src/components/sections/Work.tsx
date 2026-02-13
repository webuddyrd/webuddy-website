import { ArrowUpRight } from 'lucide-react';
import { portfolio } from '../../data/portfolio';
import { Link } from 'react-router-dom';
import { WorkCard } from '../ui/WorkCard';

export const Work = () => {
    return (
        <section id="work" className="py-32 bg-webuddy-dark relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-sm font-bold text-webuddy-blue tracking-widest uppercase mb-4">Selected Work</h2>
                        <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
                            Digital Products that <br />
                            <span className="text-gray-500">Define Categories.</span>
                        </h3>
                    </div>
                    <Link to="/work" className="flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-colors">
                        View All Work <ArrowUpRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {portfolio.slice(0, 3).map((project, index) => (
                        <WorkCard
                            key={index}
                            project={project}
                            index={index}
                            className={index === 2 ? 'md:col-span-2 md:aspect-[21/9]' : ''}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
