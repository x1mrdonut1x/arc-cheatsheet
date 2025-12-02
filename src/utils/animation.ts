/**
 * Calculate staggered animation delay for list items.
 * All items will finish their entrance animation within the total duration.
 *
 * @param index - The index of the current item
 * @param itemCount - Total number of items in the list
 * @param totalDuration - Total time for all animations to complete (default: 0.3s)
 * @returns The delay in seconds for the item at the given index
 */
export function getStaggerDelay(
  index: number,
  itemCount: number,
  totalDuration = 0.3
): number {
  if (itemCount <= 1) return 0
  return (index * totalDuration) / itemCount
}

/**
 * Get animation style object for staggered list items.
 *
 * @param index - The index of the current item
 * @param itemCount - Total number of items in the list
 * @param totalDuration - Total time for all animations to complete (default: 0.3s)
 * @returns Style object with animationDelay property
 */
export function getStaggerStyle(
  index: number,
  itemCount: number,
  totalDuration = 0.3
): React.CSSProperties {
  return {
    animationDelay: `${getStaggerDelay(index, itemCount, totalDuration)}s`,
  }
}
