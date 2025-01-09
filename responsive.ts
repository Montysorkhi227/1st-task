import { Dimensions } from 'react-native';

// Get the device's screen dimensions
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Define a base width and height (from a reference design, e.g., iPhone 12 Mini: 375 x 812)
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

/**
 * Scale width based on the screen size
 * @param {number} size - The width to scale
 * @returns {number} - The scaled width
 */
export const scaleWidth = (size:any) => (SCREEN_WIDTH / BASE_WIDTH) * size;

/**
 * Scale height based on the screen size
 * @param {number} size - The height to scale
 * @returns {number} - The scaled height
 */
export const scaleHeight = (size) => (SCREEN_HEIGHT / BASE_HEIGHT) * size;

/**
 * Scale font size based on the screen size
 * @param {number} size - The font size to scale
 * @returns {number} - The scaled font size
 */
export const scaleFont = (size: any) => Math.min(scaleWidth(size), scaleHeight(size));
// Function to calculate width percentage
export const reswWidth = (size: any) => (SCREEN_WIDTH * size) / 100;

// Function to calculate height percentage
export const resHeight = (size: any) => (SCREEN_HEIGHT * size) / 100;