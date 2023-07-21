// Get all the images under the assets folder

/**
 * dynamic import Images url
 *
 * @param {string} url - The Images url.
 * @return {Promise<string>} Images url if the resolve successful, or console error message if the resolve fails.
 */
export const useFile = (url: string) => {
  const modules: Record<string, any> = import.meta.glob(
    "@/assets/**/*.{png,svg,jpg,jpeg}",
    { eager: true }
  );  
  if (modules[url]) return modules[url].default;
  else {
    // images url exception
    console.log("Error url is wrong path");
  }
};
