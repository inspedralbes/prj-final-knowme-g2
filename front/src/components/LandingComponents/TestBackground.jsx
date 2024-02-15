import { useEffect } from 'react';

export function TestBackground() {
    useEffect(() => {
        const stars = document.querySelectorAll('.star');

        stars.forEach(star => {
            const duration = Math.random() * 1 + 0.5;
            const delay = Math.random() * 0.5;

            star.animate([
                { transform: 'translateY(-200px)' },
                { transform: 'translateY(0)' }
            ], {
                duration: duration,
                direction: 'alternate',
                iterations: Infinity,
                delay: delay,
                easing: 'ease-in-out'
            });
        });
    }, []);

    return (
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-full">
                <div class="h-full w-full bg-gradient-to-b from-blue-900 via-blue-700 to-purple-900"></div>
            </div>
            <div class="absolute top-0 left-0 w-full h-full">
                {Array.from({ length: 100 }).map((_, index) => (
                <div
                    key={index}
                    class="star absolute bg-white w-0.5 h-0.5 rounded-full"
                    style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 10}s`
                    }}
                ></div>
                ))}
            </div>
        </div>
    );
}

export default TestBackground