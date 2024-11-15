import { useEffect, useState, useRef } from 'react';

interface Card {
    title: string;
}

const Cards: Card[] = [
    { title: 'Innovative Solutions' },
    { title: 'Customer-Centric Approach' },
    { title: 'Expert Team' },
    { title: 'Quality Assurance' },
    { title: 'Timely Delivery' },
    { title: '24/7 Support' }
];

const WhyUS = () => {
    const [activeCards, setActiveCards] = useState<number[]>([]);
    const [startScroll, setStartScroll] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setActiveCards([]);
        setStartScroll(false);
        
        Cards.forEach((_, index) => {
            setTimeout(() => {
                setActiveCards(prevCards => [...prevCards, index]);
                
                if (index === Cards.length - 1) {
                    setTimeout(() => {
                        setStartScroll(true);
                    }, 1000);
                }
            }, 500 * (index + 1));
        });
    }, []);

    // Double the cards for infinite scroll effect
    const scrollingCards = [...Cards, ...Cards];

    return (
        <div className="Whatwedo-section">
            <h1 className="Whatwedo-h1">Why Choose Us? We Bring Your Ideas to Life</h1>
            <h3 className="whyus-h3">Your Vision. Our Expertise.</h3>
            <p className="whatwedo-p1">
                We don't just build websites — we craft digital experiences that align with your brand's goals and vision.
                From the initial concept to the final launch, we're here to ensure your ideas become a reality.
            </p>
            <div className="pt-5 overflow-hidden scroller-container">
                <div 
                    ref={containerRef}
                    className={`flex gap-5 py-2 scroller-inner
                        ${startScroll ? 'scrolling' : ''}`}
                    style={{
                        width: 'fit-content'
                    }}
                >
                    {(startScroll ? scrollingCards : Cards).map((card, index) => (
                        <div
                            key={index}
                            className="box"
                            style={{
                                transform: `translateX(${activeCards.includes(index % Cards.length) || startScroll ? '0' : '100%'})`,
                                opacity: activeCards.includes(index % Cards.length) || startScroll ? 1 : 0,
                                transition: 'all 0.5s ease-out',
                            }}
                        >
                            <div className="w-full h-full flex items-end justify-start hover:scale-110 transition-transform duration-300">
                                <h1 className='p-4 whyus-h1'>{card.title}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyUS;