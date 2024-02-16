export function BackgroundLR() {
    return (
        // <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
        //     <div class="absolute top-0 left-0 w-full h-full">
        //         <div class="h-full w-full bg-gradient-to-b from-blue-900 via-blue-700 to-purple-900"></div>
        //     </div>
        //     <div class="absolute top-0 left-0 w-full h-full">
        //         <div class="cube bg-blue-500"></div>
        //         <div class="sphere absolute top-1/4 left-1/4"></div>
        //         <div class="sphere absolute top-1/2 right-1/4"></div>
        //     </div>
        // </div>

        <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-full">
                <div class="h-full w-full bg-gradient-to-b from-blue-900 via-blue-700 to-purple-900"></div>
            </div>
            <div class="absolute top-0 left-0 w-full h-full">
                <div class="absolute top-1/4 left-1/4 animate-ping">
                    <div class="cube bg-blue-500 w-16 h-16"></div>
                </div>
                <div class="absolute top-1/2 right-1/4 animate-bounce">
                    <div class="sphere bg-red-500 w-16 h-16 rounded-full"></div>
                </div>
                <div class="absolute top-1/2 left-1/4 animate-spin">
                    <div class="sphere bg-red-500 w-16 h-16 rounded-full"></div>
                </div>
            </div>
        </div>
    )
}

export default BackgroundLR