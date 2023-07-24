function insert(intervals: number[][], newInterval: number[]): number[][] {
    const merged: number[][] = [];
    let i = 0;

    //Check if the end of the current interval is less than the start of the new interval. 
    //If true, push the current interval into the merged array and increment i.
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        merged.push(intervals[i]);
        i++;
    }

    //Check if the start of the current interval is less than or equal to the end of the new interval.
    //If true, update the start and end of the new interval to include the current interval and increment i.
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    merged.push(newInterval); //Push the updated new interval into the merged array.
 
    // Merge remaining intervals in-place by iterating from the current index i
    // to the end of the intervals array and pushing each interval into the merged array.
    for (; i < intervals.length; i++) {
        merged.push(intervals[i]);
    }

    return merged;
}
// Time complexity O(n)
