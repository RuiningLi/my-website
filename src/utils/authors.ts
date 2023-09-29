export default function author_to_website_url(name: string): string {
    const name_ = name.endsWith("*") ? name.slice(0, -1) : name;
    if (name_ === "Shangzhe Wu") {
        return 'https://elliottwu.com/';
    }
    if (name_ === "Tomas Jakab") {
        return 'https://www.robots.ox.ac.uk/~tomj/';
    }
    if (name_ === "Christian Rupprecht") {
        return 'https://chrirupp.github.io/';
    }
    if (name_ === "Andrea Vedaldi") {
        return 'https://www.robots.ox.ac.uk/~vedaldi/';
    }
    return "#";
}