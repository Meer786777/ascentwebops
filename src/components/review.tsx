import { useEffect, useState, useRef } from 'react';

interface Review {
    name: string;
    message: string;
}

const reviews: Review[] = [
    { 
        name: 'John Doe', 
        message: 'Excellent service! The team understood our vision and delivered a product that exceeded expectations. Great support throughout the process.' 
    },
    { 
        name: 'Jane Smith', 
        message: 'Fantastic experience. The team was responsive, professional, and ensured everything was completed on time. Highly recommended.' 
    },
    { 
        name: 'Sam Wilson', 
        message: 'High-quality work with impressive attention to detail. They brought our ideas to life effortlessly. Will definitely work with them again!' 
    },
    { 
        name: 'Alex Brown', 
        message: 'Professional and easy to work with. They provided creative solutions that aligned perfectly with our goals. A smooth experience overall.' 
    },
    { 
        name: 'Emily White', 
        message: 'Exceeded our expectations! The team was efficient, communicative, and delivered a top-notch final product. Would highly recommend.' 
    },
    { 
        name: 'Michael Green', 
        message: 'A great experience from start to finish. Their commitment to quality was clear, and the results speak for themselves. Truly impressed.' 
    }
];


const ReviewSection = () => {
    const [activeReviews, setActiveReviews] = useState<number[]>([]);
    const [startScroll, setStartScroll] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setActiveReviews([]);
        setStartScroll(false);

        reviews.forEach((_, index) => {
            setTimeout(() => {
                setActiveReviews((prevReviews) => [...prevReviews, index]);

                if (index === reviews.length - 1) {
                    setTimeout(() => {
                        setStartScroll(true);
                    }, 1000);
                }
            }, 500 * (index + 1));
        });
    }, []);

    // Double the reviews for infinite scroll effect
    const scrollingReviews = [...reviews, ...reviews];

    return (
        <div className="Whatwedo-section">
            <h1 className="Whatwedo-h1">What Our Clients Say</h1>
            <p className="whatwedo-p1">
            Let our satisfied clients speak for us. Read their stories about how we’ve helped elevate their brands and improve their online presence.
            </p>
            <div className="pt-5 overflow-hidden scroller-container">
                <div
                    ref={containerRef}
                    className={`flex gap-5 py-2 scroller-inner ${startScroll ? 'scrolling' : ''}`}
                    style={{
                        width: 'fit-content'
                    }}
                >
                    {(startScroll ? scrollingReviews : reviews).map((review, index) => (
                        <div
                            key={index}
                            className="box-2"
                            style={{
                                transform: `translateX(${activeReviews.includes(index % reviews.length) || startScroll ? '0' : '100%'})`,
                                opacity: activeReviews.includes(index % reviews.length) || startScroll ? 1 : 0,
                                transition: 'all 0.5s ease-out',
                            }}
                        >
                            <div className="w-full h-full flex flex-col items-start justify-start  transition-transform duration-300 p-4">
                            <h2 className='review-name'>- {review.name}</h2>
                                <p className='review-message'>{review.message} </p>
                           
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <p className="whatwedo-p1">See More of What Our Clients Have to Say <span className='see-more'>About Us</span></p>

        </div>
    );
};

export default ReviewSection;
