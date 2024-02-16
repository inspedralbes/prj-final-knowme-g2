export function BackgroundLR() {
    return (
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-full">
                <div class="h-full w-full bg-gradient-to-b from-blue-900 via-blue-700 to-purple-900"></div>
            </div>
            <div class="absolute top-0 left-0 w-full h-full">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div class="absolute animate-ping"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`
                            }}>
                        <div class="cube bg-blue-500 w-16 h-16"></div>
                    </div>
                ))}
                {Array.from({ length: 10 }).map((_, index) => (
                    <div class="absolute animate-ping"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`
                            }}>
                        <div class="cube bg-blue-500 w-8 h-8"></div>
                    </div>
                ))}
                {/* <div class="absolute animate-bounce"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`
                        }}>
                    <div class="sphere bg-red-500 w-16 h-16 rounded-full"></div>
                </div>
                <div class="absolute animate-spin"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`
                        }}>
                    <div class="sphere bg-red-500 w-16 h-16 rounded-full"></div>
                </div> */}
            </div>
        </div>
    )
}

export default BackgroundLR