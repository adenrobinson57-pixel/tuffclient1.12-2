// fps-limiter.js

/**
 * FPS Limiter
 * This module caps the game's FPS by throttling the requestAnimationFrame calls.
 * Usage: Call `FPSLimiter.start()` to begin limiting FPS and `FPSLimiter.stop()` to resume normal operation.
 */

const FPSLimiter = (() => {
    let lastFrameTime = 0;
    let isActive = false;
    let fpsCap = 60; // Target FPS
    let frameTime = 1000 / fpsCap;

    const start = () => {
        isActive = true;
        requestAnimationFrame(loop);
    };

    const stop = () => {
        isActive = false;
    };

    const loop = (currentFrameTime) => {
        if (!isActive) return;

        const deltaTime = currentFrameTime - lastFrameTime;
        if (deltaTime < frameTime) {
            requestAnimationFrame(loop);
            return;
        }

        lastFrameTime = currentFrameTime;

        // Here is where you would call your game update/render logic

        requestAnimationFrame(loop);
    };

    return {
        start,
        stop,
    };
})();

// Exporting FPSLimiter for external usage
export default FPSLimiter;
