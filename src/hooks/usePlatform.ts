import usePlateforms from "./usePlatforms";

const usePlateform = (id?: number) => {
    const { data: platforms } = usePlateforms();
    const platform = platforms.results.find(platform => platform.id === id);
    return platform;
}
export default usePlateform;