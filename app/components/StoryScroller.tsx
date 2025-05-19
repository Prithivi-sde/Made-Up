import { useRef } from 'react';
import ForMeImage from '../Images/ForMe.jpg';
import JeansImage from '../Images/Jeans.jpg';
import TShirtImage from '../Images/T-Shirt.png';
import ShirtImage from '../Images/Shirts.png';
import TrousersImage from '../Images/Trousers.png';

export const StoryScroller = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -100 : 100,
                behavior: 'smooth',
            });
        }
    };

    const items = [
        { label: 'For Me', icon: ForMeImage.src },
        { label: 'Jeans', icon: JeansImage },
        { label: 'T-Shirts', icon: TShirtImage },
        { label: 'Shirt', icon: ShirtImage },
        { label: 'Trousers', icon: TrousersImage},
    ];

    return (
        <div className="d-flex d-md-none align-items-center px-2 position-relative">
            <button
                className="btn btn-light position-absolute start-0 top-50 translate-middle-y z-1"
                style={{ borderRadius: '50%', color: '#DDDDDD' }}
                onClick={() => scroll('left')}
            >
                ‹
            </button>

            <div
                ref={scrollRef}
                className="d-flex overflow-auto gap-4 px-4 mx-4 py-3"
                style={{ scrollBehavior: 'smooth' }}
            >
                {items.map((item, index) => (
                    <div key={index} className="text-center flex-shrink-0" style={{ width: 70 }}>
                        <div
                            className={`rounded-circle mx-auto d-flex align-items-center justify-content-center`}
                            style={{
                                width: 60,
                                height: 60,
                                overflow: 'hidden',
                                border: index === 0 ? '2px solid #E10000' : 'none',
                            }}
                        >
                            <img
                                src={typeof item.icon === 'string' ? item.icon : item.icon.src}
                                alt={item.label}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div
                            className="small mt-2 text-uppercase"
                            style={{ color: index === 0 ? '#333333' : '#777777' }}
                        >
                            {item.label}
                        </div>
                    </div>
                ))}

            </div>
            <button
                className="btn btn-light position-absolute end-0 top-50 translate-middle-y z-1"
                style={{ borderRadius: '50%' }}
                onClick={() => scroll('right')}
            >
                ›
            </button>
        </div>
    );
};

