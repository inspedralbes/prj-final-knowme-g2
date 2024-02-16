export function BackgroundLR() {
    return (
        // <div class="flex items-center justify-center h-screen">
        //     <div class="cube bg-blue-500 w-20 h-20 animate-bounce shadow-lg"></div>
        //     <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-spin"></div>
        // </div>
        <div class="flex justify-center items-center h-screen">
            <div class="cube bg-blue-500"></div>
            <div class="sphere absolute top-1/4 left-1/4"></div>
            <div class="sphere absolute top-1/2 right-1/4"></div>
        </div>
    )
}

export default BackgroundLR