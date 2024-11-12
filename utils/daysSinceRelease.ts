export function daysSinceRelease(updatedAt: string) {
    const release = new Date(updatedAt);
    const today = new Date();
    const timeDiff = today.getTime() - release.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    return daysDiff;
}